import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación API Planta tu hogar',
            description: 'Documentación del proyecto planta tu hogar de coderhouse'
        }
    },
    apis: [`./src/docs/**/*.yaml`]
}

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);

