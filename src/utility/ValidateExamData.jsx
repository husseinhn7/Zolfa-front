import * as Joi from 'joi'

// const Joi = require('joi');

// Define the schema
export  const schema = Joi.object({
  title: Joi.string().required(),
  subj: Joi.number().integer().min(0).required(),
  start_date: Joi.date().iso().min(new Date()).required(),
  end_date: Joi.date().iso().min(Joi.ref('start_date')).required(),
  exam_duration: Joi.number().integer().min(1).required(),
  final: Joi.boolean().required(),
  comment: Joi.string().allow(''),
  final_mark: Joi.number().min(0).max(100)
});


export const questionSchema = Joi.object({
    question :  Joi.string().required(),
    id : Joi.number() ,
    mark : Joi.any() , 
    error : Joi.any() ,
})

export const optionsSchema = Joi.object({
    option :  Joi.string().required(),
})