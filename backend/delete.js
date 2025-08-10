// Corrected backend function
import { Card } from "./db-models/carddb.js";

export default async function deletecard(req, res) {
  try {
    const { id } = req.params;
    await Card.findByIdAndDelete(id);
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error("Error deleting card:", error);
    res.status(500).json({ error: "Failed to delete card" });
  }
}