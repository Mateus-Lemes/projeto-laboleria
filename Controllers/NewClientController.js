import db from "../db.js";


export async function NewClientController(req, res) {
const {name, address, phone} = req.body; 
    try {
        await db.query(`
        INSERT INTO clients (name, address, phone)
        VALUES ($1, $2, $3)`,
        [name, address, phone]);
    
        res.status(201).send("Novo cliente adicionado com sucesso!");
        
    } catch (error) {
        console.log(error);
        res.status(500).send("erro 500");
        
    }
}