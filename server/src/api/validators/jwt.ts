import { Request, Response, NextFunction } from 'express';


export const validateJwt = (req: Request, res: Response, next: NextFunction) => {
    console.log("Valid");
    next();
}