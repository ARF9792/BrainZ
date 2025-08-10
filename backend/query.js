import { getEmbeddings } from "./embedding.js";

export default async function queryembed(req, res) {
  try {
    const data = req.body.query;
    let embedding = await getEmbeddings(data);

    if (Array.isArray(embedding)) {
      if (Array.isArray(embedding[0])) {
        embedding = embedding[0]; 
      } else if (embedding[0] instanceof Float32Array) {
        embedding = Array.from(embedding[0]);
      } else {
        embedding = Array.from(embedding);
      }
    } else {
      embedding = Array.from(embedding);
    }

    res.json(embedding);
  } catch (err) {
    console.error("Error generating embedding:", err);
    res.status(500).json({ error: "Failed to generate embedding" });
  }
}
