import { Response, Request } from 'express';
import { Candidates } from '../../entities/candidates';
import  { IAddCandidates, ICandidates } from '../helpers/interfaces';
import { checkNumber, getCandidate } from '../helpers/helpers';

export const getAllCandidates = async (req: Request, res: Response) => {

    if (Object.keys(req.query).length !== 0) {
        const queryId: string = req.query.id as string;
        const candidateId: number = parseInt(queryId);
        const checkNum: boolean = checkNumber(candidateId);

        if (!checkNum) {
            res.status(400).send({ message: "Wrong candidate ID"});
        } else {
            const candidateData = await getCandidate(candidateId);
            if (candidateData == false) {
                res.status(400).send({ message: "Wrong candidate ID" });
            } else {
                res.status(200).send(candidateData);
            }
        }

    } else { 
        try {
            const allCandidates: ICandidates[] = await Candidates.find();
            if(allCandidates.length !== 0) {
                res.status(200).send(allCandidates);
             } else {
                res.status(400).send({ message: "Table is empty" });
            }
        } catch (e) {
                res.status(500).send({ message: "Something went wrong" });
            }
    }

};

export const addNewCandidate = async (req: Request, res: Response) => {
   try {
       const newCandidate: IAddCandidates = req.body;
       const insertCandidate = await Candidates.insert(newCandidate);
       res.status(201).send({ message: "Candidate added" });
   } catch (e) {
        res.status(500).send({ message: "Something went wrong" });
   }
};

export const deleteCandidate = async (req: Request, res: Response) => {
    const queryId: string = req.query.id as string;
    const candidateId: number = parseInt(queryId);
    const checkNum: boolean = checkNumber(candidateId);

    if (!checkNum) {
        res.status(400).send({ message: "Wrong candidate ID"});
    } else { 
        try {
            const deleteCandidate = await Candidates.delete(candidateId);
            if (deleteCandidate.affected === 0 ) {
                res.status(400).send({ message: `Candidate with the ${candidateId} does not exist` });
            } else {
                res.status(200).send({ message: `Candidate with the ${candidateId} deleted` });
            }
        } catch (e) {
            res.status(400).send({ message: "Wrong candidate ID"});
        }
    }
};