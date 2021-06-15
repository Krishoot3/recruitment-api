import { Router } from 'express';
import { getAllCandidates, addNewCandidate } from '../controllers/candidates';
import { dataValidation } from '../validators/validation';
import { candidateSchema } from '../validators/schemas';
import { validateJwt } from '../validators/jwt';


export const candidates: Router = Router();


candidates.route('/candidates')
    .get(validateJwt, getAllCandidates)
    .post(dataValidation(candidateSchema), validateJwt, addNewCandidate);


