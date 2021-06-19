import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const invalidRequest = (req: Request, res: Response) => {
    res.status(404).send({ message: "Invalid request"}); 
};

export const jwtValidation = (res: Response, next: NextFunction, token: string) => {
    try {
        jwt.verify(token, 'secret123');
        next();
    } catch (e) {
        res.status(500).send({ message: "Invalid token" });
    }
}


