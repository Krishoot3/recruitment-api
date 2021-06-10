import { Request, Response } from "express";


export const invalidRequest = (req: Request, res: Response) => {
    res.status(404).send({ message: "Invalid request"}); 
};