import { Router } from 'express';
import { getAllCandidates, addNewCandidate } from '../controllers/candidates';
import { validateJwt } from '../helpers/helpers';

export const candidates: Router = Router();


candidates.route('/candidates')
    .get(validateJwt, getAllCandidates)
    .post(validateJwt, addNewCandidate);


