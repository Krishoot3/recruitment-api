import { Application, request, response } from 'express';
import { invalidRequest } from '../helpers/helpers';
import { routes } from '../routes/candidates'

export const middleware = (app: Application, express: any) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(routes);
    app.use(invalidRequest);
};