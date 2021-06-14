import { Response, Request } from 'express';

export const default_page = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome!"});
};

export const loginFnc = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Login!"});
};

export const registerFnc = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Register!"});
};