import { Request, Response, NextFunction } from 'express';
import { jwtValidation } from '../helpers/helpers';

export const validateJwt = (req: Request, res: Response, next: NextFunction) => {
    let authHeader: string = req.headers.authorization!;

    try {
        if (authHeader.startsWith('Bearer')) {
                const token: string = authHeader.split(' ')[1];
                jwtValidation(res, next, token);
        } else {
            res.status(401).send({ message: "Authorization not supported" });
        }
    } catch (e) {
        res.status(500).send({ message: "Something went wrong" });
    }
} 