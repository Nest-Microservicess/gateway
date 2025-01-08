import 'dotenv/config'
import * as joi from 'joi'

interface EnvVars{
    PORT:number
    PRODUCTS_MICROSERVICE_HOST: string
    PRODUCTS_MICROSERVICE_PORT: number
    ORDER_MICROSERVICE_HOST: string
    ORDER_MICROSERVICE_PORT: number
}
const envsSchema =joi.object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST : joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT : joi.number().required(),
    ORDER_MICROSERVICE_HOST: joi.string().required(),
    ORDER_MICROSERVICE_PORT: joi.number().required()
})
.unknown(true);
const {error,value}= envsSchema.validate(process.env)
if(error){
    throw new Error(`config validation error: ${error.message} `)
}
const envVars: EnvVars=value

export const envs={
    port: envVars.PORT,
    productsMicroServiceHost:envVars.PRODUCTS_MICROSERVICE_HOST,
    productsMicroServicePort:envVars.PRODUCTS_MICROSERVICE_PORT,
    ordersMicroServiceHost:envVars.ORDER_MICROSERVICE_HOST,
    ordersMicroServicePort: envVars.ORDER_MICROSERVICE_PORT


}