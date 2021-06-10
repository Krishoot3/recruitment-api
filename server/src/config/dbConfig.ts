import { createConnection } from 'typeorm';
import { Candidates } from '../entities/candidates';
import { logger } from './logger';


// export const dbConnect = async () => {
// const connection: Connection = await createConnection({
//         type: "mysql",
//         database: "recruitment-api",
//         username: "root",
//         password: "root",
//         logging: true,
//         //when do you want to create new tables, change synchronize to true
//         synchronize: false,
//         entities: [Candidates],
//     }).then( () => console.log("smg"))
//     .catch( err => console.log(err))
// };

export const connection = createConnection({
    type: "mysql",
    database: "recruitment-api",
    username: "root",
    password: "root",
    logging: true,
    //when do you want to create new tables, change synchronize to true
    synchronize: false,
    entities: [Candidates],
}).then( () => console.log("Database connected"))
.catch( err => logger.error(err.stack));
