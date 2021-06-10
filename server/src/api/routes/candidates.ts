import { Router } from 'express';
import { default_page, getAllCandidates, addNewCandidate } from '../controllers/candidates';

export const routes: Router = Router();



routes.get('/', default_page);

routes.route('/candidates')
    .get(getAllCandidates)
    .post(addNewCandidate);

