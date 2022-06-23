import db from "../db.js";

export async function NewCakeController(req, res) {
    const {name, price, description, image} = req.body
    
    try {
        const nameExist = await db.query(`SELECT * FROM cakes WHERE name = $1`, [name]);
        console.log(nameExist.rows.length)
        if(nameExist.rows.length !== 0) {
            return res.sendStatus(409);
        }
        await db.query(`
        INSERT INTO cakes (name, price, description, image)
        VALUES ($1, $2, $3, $4)`,
        [name, price, description, image]);
        
        return res.status(201).send("Bolo adicionado com sucesso!");

    } catch (error) {
        console.log(error)
        res.status(500).send("erro 500");
    }
}