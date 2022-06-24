import { clientSchema } from "../schema.js";


export async function NewClientMiddlewares(req, res, next) {
    const { error } = clientSchema.validate(req.body);

    if (error) {
        return res.sendStatus(400);
    }
    
    next();
}