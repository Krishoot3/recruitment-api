import { Router } from 'express';
import { default_page, userLogin, userRegister } from '../controllers/unprotected';
import { usersSchema } from '../validators/schemas';
import { dataValidation } from '../validators/validation';

export const unprotected: Router = Router();


unprotected.get('/', default_page);

unprotected.post('/login', dataValidation(usersSchema), userLogin);

unprotected.post('/register', dataValidation(usersSchema), userRegister);