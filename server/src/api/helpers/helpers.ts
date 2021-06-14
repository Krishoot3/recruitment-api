import { NextFunction, Request, Response } from "express";


export const invalidRequest = (req: Request, res: Response) => {
    res.status(404).send({ message: "Invalid request"}); 
};

export const validateJwt = (req: Request, res: Response, next: NextFunction) => {
    console.log("Valid");
    next();
}