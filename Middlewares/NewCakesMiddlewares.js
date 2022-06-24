import { cakesSchema } from "../schema.js";
import { imageCakesSchema } from "../schema.js";

export async function NewCakesMiddlewares(req, res, next) {
    const {name, price, description, image} = req.body;
    
    const validationCakes = cakesSchema.validate({
        name,
        price,
        description
    }, {abortEarly: false});
    if (validationCakes.error) {
        console.log(validationCakes.error)
        return res.sendStatus(400);
    }

    const validationImageCakes = imageCakesSchema.validate({image})
    if(validationImageCakes.error) {
        console.log(validationImageCakes.error)
        return res.sendStatus(422);
    }

    next();
}