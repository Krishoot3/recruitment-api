import { Router } from 'express';
import { default_page, loginFnc, registerFnc } from '../controllers/unprotected';

export const unprotected: Router = Router();


unprotected.get('/', default_page);

unprotected.post('/login', loginFnc);

unprotected.post('/register', registerFnc);