export type LogSeverityLevel = 'low' | 'medium' | 'high'

export class LogEntity {
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;

    constructor(level: LogSeverityLevel, message: string) {
        this.level = level;
        this.message = message;
        this.createdAt = new Date();
    }

    /**
     * convierte un json string en una entidad log
     * @param json Un json convertido a string
     * @returns Un objeto LogEntity
     */
    static fromJson = (json: string): LogEntity => {
        const { level, message, createdAt } = JSON.parse(json);

        const log = new LogEntity(level, message);
        log.createdAt = new Date(createdAt)

        return log;
    }

}