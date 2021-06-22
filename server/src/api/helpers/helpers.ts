import { Request, Response } from "express";
import { Candidates } from '../../entities/candidates';
import  { ICandidates } from '../helpers/interfaces';

export const invalidRequest = (req: Request, res: Response) => {
    res.status(404).send({ message: "Invalid request"}); 
};

export const getCandidate = async (candidateId: number) => {
    try {
        const candidate: ICandidates[] = await Candidates.find({ id: candidateId });
        return candidate;
    } catch (e) {
        return false;
    }
};

export const checkNumber = (candidateId: number): boolean => {
    if (isNaN(candidateId)) { 
        return false
    } else {
        return true;
    }
};

