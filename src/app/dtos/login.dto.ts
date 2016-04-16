import {Injectable} from 'angular2/core';

@Injectable()
export class LoginDto {
    
    public username: string;
    public password: string;
    
    public constructor() {
    }
}