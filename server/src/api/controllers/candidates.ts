import { Response, Request } from 'express';

export const default_page = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome!"});
};

export const getAllCandidates = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome1!"});
};

export const addNewCandidate = async (req: Request, res: Response) => {
    res.status(201).send({ message: "Welcome!"});
};