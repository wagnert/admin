import {Injectable} from 'angular2/core';
import {TokenDto} from '../dtos/token.dto';
import {LoginDto} from '../dtos/login.dto';
import {Observable} from 'rxjs/Observable';
import {LogService} from './log.service';
import {TokenService} from './token.service';
import {Router} from 'angular2/router';
import {Http, RequestOptions, Headers, Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
    
    private lastLoginUnsuccessful: boolean;
    
    private apiEndpoint: string = "http://api.dev/p_security_check.do";
    
    public constructor(
        private http: Http,
        private router: Router,
        private logService: LogService,
        private tokenService: TokenService) {
            
            this.tokenService.check()
                .subscribe((value) => {
                    if (!value) this.logout();
                });
        }

    get isAuthenticated(): boolean {
        return this.tokenService.token !== null;
    }

    get username(): string {
        return this.tokenService.username;
    }

    /**
     * Logout the current user (remove token and navigate to unprotected route)
     */
    public logout(): void {
        
        this.logService.logDebug('LoginService.logout called');

        this.lastLoginUnsuccessful = false;
        this.tokenService.token = null;

        this.router.navigate(['Login']);
    }
    
    public login(dto: LoginDto): Observable<TokenDto> {
        
        this.logService.logDebug("Now try to login with " + dto.username + "/" + dto.password);
        
        let body = "p_username=" + dto.username + "&p_password=" + dto.password;
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
        
        return Observable.create((observer)=> {
            this.http.post(this.apiEndpoint, body, options)
                .map(response => <TokenDto>response.json())
                .subscribe(
                    (tokenDto) => {
                            this.saveToken(tokenDto.accessToken);
                            this.tokenService.username = dto.username;

                            let expiryDate = new Date();
                            expiryDate.setSeconds(expiryDate.getSeconds() + tokenDto.expiresIn);
                            this.tokenService.tokenExpiry = expiryDate;
                            observer.next(tokenDto);
                        },
                        (error) => observer.error(error),
                        () => observer.complete()
                );
        });
    }
    
    /**
     * Saves the token returned by the login functionlity
     * in the local storage.
     * 
     * @param string token The token to save
     * 
     * @return void
     */
    protected saveToken(token: string): void {
        this.logService.logDebug('LoginService.saveToken: Saving token ' + token);
        this.lastLoginUnsuccessful = false;
        this.tokenService.token = token;
    }

    handleError(error: TokenDto) {
        this.logService.logDebug('LoginService encountered an error: ' + error);
        this.lastLoginUnsuccessful = true;
    }
}