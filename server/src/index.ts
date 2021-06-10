import express, { Application } from 'express';
import { middleware } from './api/middleware/middleware';
import { connection } from './config/dbConfig';
import { logger } from './config/logger'



const main = async () => {

    const app: Application = express();
    const PORT: number = 3000;
    
    middleware(app, express);

    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`) );
    //await connection;
};

main().catch( err => logger.error(err.stack));