import db from "../db.js";


export async function OrdersOnTheDateController(req, res) {
    const { date } = req.query;
    try {
        let orders = null;
        if(date) {
            orders = await db.query(`
            SELECT orders.*, clients.name as "clientName", clients.address, clients.phone, 
            cakes.name as "cakeName", cakes.price, cakes.image, cakes.description FROM orders
            JOIN clients
            ON clients.id = orders."clientId"
            JOIN cakes
            ON cakes.id = orders."cakeId"
            WHERE (CAST("createdAt" AS DATE) = '${date}')`)
        } else {
            orders = await db.query(`
            SELECT orders.*, clients.name as "clientName", clients.address, clients.phone, 
            cakes.name as "cakeName", cakes.price, cakes.image, cakes.description FROM orders
            JOIN clients
            ON clients.id = orders."clientId"
            JOIN cakes
            ON cakes.id = orders."cakeId"`)
        }

        if (orders.rows.length === 0) {
            return res.status(404).send([]);
        }

        let allOrdersArray = [];

        orders.rows.forEach(order => {
            let { clientId, clientName, address, phone, cakeId, cakeName, price, description, image, createdAt, quantity, totalPrice } = order;

            let ordersObject = {
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
    
            allOrdersArray = [...allOrdersArray, ordersObject]
        });

        res.status(200).send(allOrdersArray);
    } catch (error) {
        console.log(error);
        return res.status(500).send("erro 500");
    }
}