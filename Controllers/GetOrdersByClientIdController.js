import db from "../db.js";

export async function getOrderByClientIdController(req, res) {
    const { id } = req.params;

    try {
        
        const orders = await db.query(`
        SELECT orders.*, cakes.name as "cakeName" 
        FROM orders
        JOIN cakes
        ON orders."cakeId" = cakes.id
        WHERE "clientId" = $1`, [id]);

        if (orders.rows.length === 0) {
            return res.sendStatus(404);
        }

        let ordersArray = [];

        orders.rows.forEach(order => {
            let {id, quantity, createdAt, totalPrice, cakeName} = order;

            const orderObject = {
                orderId: id,
                quantity,
                createdAt,
                totalPrice,
                cakeName
            };

            ordersArray = [...ordersArray, orderObject]
        });

        res.status(200).send(ordersArray);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    } 
}
