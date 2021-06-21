import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const validateJwt = (req: Request, res: Response, next: NextFunction) => {
    let authHeader: string = req.headers.authorization!;

    try {
        const token: string = authHeader.split(' ')[1];
        jwt.verify(token, 'secret123');
        next();
    } catch (e) {
        res.status(401).send({ message: "Invalid token" });
    }
} 