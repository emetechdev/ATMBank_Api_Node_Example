import { LogEntity, LogSeverityLevel } from '../model';


/** Clase Abstracta - DataSource */
export abstract class LogDataSource {
    constructor(){}
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]>
}