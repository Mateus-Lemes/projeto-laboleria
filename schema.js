import Joi from "joi";

export const cakesSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().greater(0).required(),
    description: Joi.string().min(0)
})

export const imageCakesSchema = Joi.object({
    image: Joi.string().pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/).required()
})