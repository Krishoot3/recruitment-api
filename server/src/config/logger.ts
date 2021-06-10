import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
    transports: 
        new transports.File({
        filename: 'src/api/logs/logs.log',
        format:format.combine(
            format.errors({ stack: true }),
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )})
    });