import db from "../db.js";

export async function getOrdersByIdController(req, res) {
    const { id } = req.params;
    
    try {

        const order = await db.query(`
        SELECT orders.*, clients.name as "clientName", clients.address, clients.phone,
        cakes.name as "cakeName", cakes.price, cakes.image, cakes.description
        FROM orders
        JOIN clients
        ON orders."clientId" = clients.id
        JOIN cakes
        ON orders."cakeId" = cakes.id
        WHERE orders.id = $1
        `, [id]);


        if (order.rows.length === 0) {
            return res.sendStatus(404);
        }

        const { clientId, clientName, address, phone, cakeId, cakeName, price, description, image, createdAt, quantity, totalPrice } = order.rows[0];

        const orderObject = {
                client: {
                    id: clientId,
                    name: clientName,
                    address,
                    phone 
                },
                cake: {
                    id: cakeId,
                    name: cakeName,
                    price,
                    description,
                    image
                },
                createdAt,
                quantity,
                totalPrice
        };

        res.status(200).send(orderObject);
        
    } catch (error) {
        
        console.log(error);
        res.sendStatus(500);
        
    }
}