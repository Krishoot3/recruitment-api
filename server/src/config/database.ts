import { createConnection } from 'typeorm';
import { Candidates } from '../entities/candidates';
import { Users } from '../entities/users';
import { logger } from './logger';

export const connection = createConnection({
    type: "mysql",
    database: "recruitment-api",
    username: "root",
    password: "root",
    logging: true,
    //when do you want to create new tables, change synchronize to true
    synchronize: false,
    entities: [Candidates, Users],
}).then( () => console.log("Database connected"))
.catch( err => logger.error(err.stack));
