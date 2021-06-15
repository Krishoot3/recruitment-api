import { Response, Request } from 'express';

export const default_page = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome!"});
};

export const userLogin = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Login!"});
};

export const userRegister = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Register!"});
};