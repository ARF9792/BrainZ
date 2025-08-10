import { Card } from "./db-models/carddb.js";

function flattenEmbedding(e) {
  
  if (Array.isArray(e)) {
    if (Array.isArray(e[0])) return Array.from(e[0]); 
    if (e[0] instanceof Float32Array) return Array.from(e[0]); 
    return Array.from(e); 
  }
  if (e instanceof Float32Array) return Array.from(e);
  throw new Error("Unknown embedding format");
}

function safeCosine(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return NaN;
  if (a.length !== b.length) return NaN;
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    const va = Number(a[i]);
    const vb = Number(b[i]);
    if (!Number.isFinite(va) || !Number.isFinite(vb)) return NaN;
    dot += va * vb;
    magA += va * va;
    magB += vb * vb;
  }
  if (magA === 0 || magB === 0) return NaN;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

export default async function matchembeddings(req, res) {
  try {
    let { queryEmbedding, userId, topN = 5, threshold } = req.body;

    
    if (threshold == null) {
      threshold = 0.2;
    } else {
      threshold = Number(threshold);
    }

    
    try {
      queryEmbedding = flattenEmbedding(queryEmbedding);
    } catch (err) {
      return res.status(400).json({ error: "Invalid query embedding format" });
    }

    
    const cards = await Card.find(
      { embedding: { $exists: true, $ne: [] }, ...(userId ? { user: userId } : {}) },
      { embedding: 1, title: 1, note: 1, url: 1 }
    ).lean();

    if (!cards || cards.length === 0) {
      return res.json([]);
    }

    const scored = cards.map(card => {
      let cardEmb;
      try {
        cardEmb = flattenEmbedding(card.embedding);
      } catch {
        cardEmb = [];
      }
      const sim = safeCosine(queryEmbedding, cardEmb);
      return {
        ...card,
        similarity: Number.isFinite(sim) ? sim : -Infinity
      };
    });

    scored.sort((a, b) => b.similarity - a.similarity);

    let filtered = scored.filter(s => s.similarity >= threshold);

    if (filtered.length === 0 && scored.length > 0) {
      filtered = [];
    }

    //console.log("Top similarities:", filtered.slice(0, 10).map(c => c.similarity));

    return res.json(filtered.slice(0, topN));

  } catch (error) {
    console.error("Error in search-cards:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
