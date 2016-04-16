import {Injectable} from 'angular2/core';
import {LogLevel} from '../models/loglevel';
import {LogService} from './log.service';

@Injectable()
export class ConsoleLogService extends LogService {

    protected doLog(formattedMessage: string): void {
        console.log(formattedMessage);
    }
}