import db from "../db.js"
import dayjs from "dayjs"

export async function NewOrderController(req, res) {
    const {clientId, cakeId, quantity, totalPrice} = req.body
    try {
        await db.query(`
        INSERT INTO orders ("clientId", "cakeId", quantity, "createdAt", "totalPrice") 
        VALUES ($1, $2, $3, $4, $5)`, 
        [clientId, cakeId, quantity, dayjs().format("YYYY-MM-DD HH:mm:ss"), totalPrice])
        res.status(200).send("Ordem criada com sucesso!")
    } catch (error) {
        console.log(error);
        res.status(500).send("erro 500");
    }
}