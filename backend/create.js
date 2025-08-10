import { Card } from "./db-models/carddb.js";
import {getEmbeddings} from "./embedding.js";
function toCardText({ title, note, url }) {
    const pieces = [];
    if (title?.trim()) pieces.push(title.trim());
    if (note?.trim())  pieces.push(note.trim());
  
    if (url) {
      
      let cleanedPath = url.replace(/^https?:\/\//, '');
    
      cleanedPath = cleanedPath.split('#')[0];
    
      cleanedPath = cleanedPath.replace(/\?(.*)/, (match) => {
        const params = match
          .slice(1) 
          .split('&')
          .filter(p => {
            const key = p.split('=')[0].toLowerCase();
            return !key.startsWith('utm_') && key !== 'ref' && key !== 'source';
          });
        return params.length ? '?' + params.join('&') : '';
      });
    
      pieces.push(`Source: ${cleanedPath}`);
    }
    
    return pieces.join('. ');
  }
  export async function create(req, res) {
    try {
      const { id: user_id } = req.body;
      const { title, url, note } = req.body.card;
  
      if (!title || !note) {
        return res.status(400).send('title and note are required');
      }
  
      const text = toCardText({ title, note, url });
      let embedding = await getEmbeddings(text);      
      if (Array.isArray(embedding)) {
        if (Array.isArray(embedding[0])) {
          embedding = embedding[0]; 
        }
      
        if (embedding[0] instanceof Float32Array) {
          embedding = Array.from(embedding[0]);
        } else {
          embedding = Array.from(embedding);
        }
      } else if (embedding instanceof Float32Array) {
        embedding = Array.from(embedding);
      } else {
        throw new Error("Embedding format not recognized");
      }
      
console.log('vector-len:', Array.isArray(embedding) ? embedding.length : embedding);

      const card = new Card({
        title,
        url: url || undefined,
        note,
        user: user_id,
        embedding
      });
  
      await card.save();
      return res.status(201).send('Card added successfully to db!');
    } catch (err) {
      console.error('Create-card error:', err);
      return res.status(500).send('Unable to save card to db!');
    }
  }  