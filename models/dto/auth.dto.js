const Joi = require("joi")

const LoginResponseDTO = Joi.object({
    message: Joi.string().required()
})

module.exports = {
    LoginResponseDTO
}