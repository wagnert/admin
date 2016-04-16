import {Injectable} from 'angular2/core';
import {LogLevel} from '../models/loglevel';

export interface LogServiceInterface {
    
    log(message: string, logLevel?: LogLevel): void;

    logVerbose(message: string): void;

    logDebug(message: string): void;

    logInfo(message: string): void;

    logWarning(message: string): void;

    logError(message: string): void;

    logCritical(message: string): void;
}

@Injectable()
export class LogService implements LogServiceInterface {
    
    public defaultLogLevel: LogLevel = LogLevel.Info;
    public maximumLogLevel: LogLevel = LogLevel.Verbose;

    public log(message: string, logLevel?: LogLevel): void {
        if (!logLevel)
            logLevel = this.defaultLogLevel;

        if (logLevel > this.maximumLogLevel)
            return;

        this.doLog(this.formatMessage(logLevel, message));
    }

    public logVerbose(message: string): void {
        this.log(message, LogLevel.Verbose);
    }

    public logDebug(message: string): void {
        this.log(message, LogLevel.Debug);
    }

    public logInfo(message: string): void {
        this.log(message, LogLevel.Info);
    }

    public logWarning(message: string): void {
        this.log(message, LogLevel.Warning);
    }

    public logError(message: string): void {
        this.log(message, LogLevel.Error);
    }

    public logCritical(message: string): void {
        this.log(message, LogLevel.Critical);
    }

    protected doLog(formattedMessage: string): void {
        // to be overwritten here
    }

    protected getIsoDate(): string {
        return new Date().toISOString();
    }

    protected getLogLevelName(logLevel: LogLevel): string {
        return LogLevel[logLevel];
    }

    protected formatMessage(logLevel: LogLevel, message: string): string {
        return this.getIsoDate() + ' [' + this.getLogLevelName(logLevel) + ']: ' + message;
    }
}