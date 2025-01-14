"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MS PREREGISTER BAQ',
            version: '1.0.0',
            description: 'Documentacion API MS Preregistro BAQ',
            servers: [
                {
                    url: 'http://localhost:3005',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./swagger/*.ts', './src/routes/*.ts']
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
