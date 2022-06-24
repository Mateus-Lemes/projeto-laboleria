import db from "../db.js";
import { orderSchema } from "../schema.js";


export async function NewOrderMiddlewares(req, res, next) {
    const{clientId, cakeId} = req.body;
    const {error} = orderSchema.validate(req.body);

    if(error) {
        return res.status(400).send("erro 400");
    }

    const clientIdExist = await db.query(`SELECT * FROM clients WHERE id = $1`, [clientId]);
    const cakeIdExist = await db.query(`SELECT * FROM cakes WHERE id = $1`, [cakeId]);
    if (clientIdExist.rows.length === 0 || cakeIdExist.rows.length === 0) {
        return res.sendStatus(404);
    }

    next();
}