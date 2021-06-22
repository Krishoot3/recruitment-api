import { Router } from 'express';
import { getCandidates, addNewCandidate, deleteCandidate } from '../controllers/candidates';
import { dataValidation } from '../validators/validation';
import { candidateSchema } from '../validators/schemas';
import { validateJwt } from '../validators/jwt';

export const candidates: Router = Router();

candidates.route('/candidates')
    .get(validateJwt, getCandidates)
    .post(dataValidation(candidateSchema), validateJwt, addNewCandidate)
    .delete(validateJwt, deleteCandidate);



