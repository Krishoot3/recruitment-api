import { Response, Request } from 'express';
import { logger } from '../../config/logger';
import { Candidates } from '../../entities/candidates';
import  { ICandidates } from '../helpers/interfaces';

export const default_page = async (req: Request, res: Response) => {
    res.status(200).send({ message: "Welcome!"});
};

export const getAllCandidates = async (req: Request, res: Response) => {
    try {
        const allCandidates: ICandidates[] = await Candidates.find();
        if(allCandidates.length !== 0) {
            res.status(200).send(allCandidates);
        } else {
            res.status(400).send({ message: "Table is empty"});
        }

    } catch (e) {
        logger.error(e.stack);
        res.status(500).send({ message: "Something went wrong"});
    }
};

export const addNewCandidate = async (req: Request, res: Response) => {
   try {
       const newCandidate: ICandidates = req.body;
       const insertCandidate = await Candidates.insert(newCandidate);
       res.status(201).send({ message: "Candidate added"});
   } catch (e) {
        logger.error(e.stack);
        res.status(500).send({ message: "Something went wrong"});
   }
};