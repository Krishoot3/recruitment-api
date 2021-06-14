import { Application, request, response } from 'express';
import { invalidRequest } from '../helpers/helpers';
import { candidates } from '../routes/candidates'
import { unprotected } from '../routes/unprotected';

export const middleware = (app: Application, express: any) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(unprotected);
    app.use(candidates);
    app.use(invalidRequest);
};