import { Card } from "./db-models/carddb.js";
function displayc(req,res){
    const user_id=req.query.id;
    Card.find({user:user_id}).then((data)=>{
        res.send(data);
    }).catch(()=>{
        res.send("Error fetching cards !")
    })
}
export {displayc}