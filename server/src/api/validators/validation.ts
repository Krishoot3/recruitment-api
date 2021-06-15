import { Request, Response, NextFunction } from "express";
import { IAddCandidates } from "../helpers/interfaces";

export const dataValidation = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    const body: IAddCandidates = req.body;

    try {
        await schema.validate(body);
        next();
    } catch (err) {
        res.status(400).send({ "message": "Invalid parameters" });
    }
};
