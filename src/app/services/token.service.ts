import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {LogService} from './log.service';
import 'rxjs/Rx';

const tokenKey: string = 'Authentication::Token';
const usernameKey: string = 'Authentication::Username';
const expiryKey: string = 'Authentication::TokenExpiration';

@Injectable()
export class TokenService {
    private authenticated: boolean;

    constructor(private logService: LogService) {
        var token = this.token;
        if ((typeof token !== 'undefined') && (token !== null))
            this.authenticated = true;
    }

    public get token(): string {
        let token = localStorage.getItem(tokenKey);
        this.logService.logVerbose('TokenService: Retrieved token: ' + token);

        return token;
    }

    public set token(token: string) {
        this.logService.logVerbose('TokenService: Setting token: ' + token);

        if (token === null) {
            localStorage.removeItem(tokenKey);
            this.username = null;
            this.tokenExpiry = null;
            this.authenticated = false;
        } else {
            localStorage.setItem(tokenKey, token);
            this.authenticated = true;
        }
    }

    public get username(): string {
        let username = localStorage.getItem(usernameKey);
        this.logService.logVerbose('TokenService: Retrieved user name: ' + username);

        return username;
    }

    public set username(username: string) {
        this.logService.logVerbose('TokenService: Setting user name: ' + username);

        if (username === null) {
            localStorage.removeItem(usernameKey);
        } else {
            localStorage.setItem(usernameKey, username);
        }
    }

    public get tokenExpiry(): Date {
        let value = localStorage.getItem(expiryKey);
        this.logService.logVerbose('TokenService: Retrieved token expiry: ' + value);

        return (value !== null) ? new Date(value) : null;
    }

    public set tokenExpiry(expiryDate: Date) {
        this.logService.logVerbose('TokenService: Setting token expiry: ' + expiryDate);

        if (expiryDate === null) {
            localStorage.removeItem(expiryKey);
        } else {
            localStorage.setItem(expiryKey, expiryDate.toISOString());
        }
    }

    check(): Observable<boolean> {
        return Observable.of(this.authenticated);
    }
}
