import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config(); 

const hf = new HfInference(process.env.HF_TOKEN);

const model = "sentence-transformers/all-MiniLM-L6-v2";

export async function getEmbeddings(text) {
    try {
        const MODEL_ID = 'sentence-transformers/all-MiniLM-L6-v2';
      const res = await hf.featureExtraction({
        model  : MODEL_ID,
        inputs : text,                 
        options: { wait_for_model: true }
      });

    return res
    } catch (err) {
      console.error('Embedding error:', err);
      throw err;                      
    }
  }