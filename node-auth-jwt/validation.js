const Joi = require('@hapi/joi');

// register validation
const registertionValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required()
  })
  const validation = schema.validate(data)
  return validation
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
  })
  const validation = schema.validate(data)
  return validation
};

module.exports.registerionValidation = registertionValidation;
module.exports.loginValidation = loginValidation;