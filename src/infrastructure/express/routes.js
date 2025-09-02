import { Router } from 'express';
import AuthController from '../express/controllers/authController.js';
import {registerSchema, loginSchema} from '';
const { registerSchema, loginSchema } = require('src/Infrastructure/Express/validationschemas/authSchemas');

module.exports = (registerUserUseCase, loginUserUseCase) => {
    const router = Router();
    const authController = new AuthController(registerUserUseCase, loginUserUseCase);

    router.post('/register', validate(registerSchema), authController.register.bind(authController));
    router.post('/login', validate(loginSchema), authController.login.bind(authController));

    return router;
};