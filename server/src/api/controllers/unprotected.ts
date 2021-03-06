import { Response, Request } from 'express';
import { Users } from '../../entities/users';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const default_page = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome!"});
};

export const userLogin = async (req: Request, res: Response) => {
    try {
        const base64Cr: string = req.headers.authorization!.split(' ')[1];
        const credentials: string = Buffer.from(base64Cr, 'base64').toString('ascii');
        const [email, password] = credentials.split(':');

        const account = await Users.findOne({ email });

        if (!account || !bcrypt.compareSync(password, account.password)) {
            res.status(401).send({ message: "Wrong email or password" });
        } else {
            let token: string = jwt.sign( { email: email }, "secret123", {
                expiresIn: 86400 // expires in 24 hours
              });
              
            res.status(200).send({ token: token });
        }   
    } catch (e) {
        res.status(401).send({ message: "Wrong authorization" });
    }
};

export const userRegister = async (req: Request, res: Response) => {
    const { email , password } = req.body;

    const findEmail = await Users.findOne({ email });
    if (findEmail) {
        res.status(401).send({ message: "Email alredy exist" });
    } else {

        try {
            const salt = bcrypt.genSaltSync(6);
            const hashPassword = bcrypt.hashSync(password, salt);

            await Users.insert({ email: email, password: hashPassword });
            res.status(201).send({ message: "User registered" });

        } catch (e) {
            res.status(500).send({ message: "Something went wrong" });
        }
    }
};