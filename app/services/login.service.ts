import {Injectable} from 'angular2/core';
import {LoginDto} from '../dtos/login.dto';
import {Observable} from 'rxjs/Observable';
import {LogService} from './log.service';
import {Http, RequestOptions, Headers, Response} from 'angular2/http';

@Injectable()
export class LoginService {
    
    private apiEndpoint: string = "http://127.0.0.1:9024/api/p_security_check.do";
    
    public constructor(private http: Http, private logService: LogService) {}
    
    public login(dto: LoginDto): void {
        
        this.logService.logDebug("Now try to login with " + dto.username + "/" + dto.password);
        
        let body = "p_username=" + dto.username + "&p_password=" + dto.password;
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
        
        this.http.post(this.apiEndpoint, body, options)
            .subscribe(
                data => this.saveToken(data),
                err =>  this.logService.logError(err),
                () =>  this.logService.logDebug('Authentication Complete!')
            );
    }
    
    /**
     * Saves the token returned by the login functionlity
     * in the local storage.
     * 
     * @param Response data The response data containing the token
     * 
     * @return void
     */
    protected saveToken(data: Response) {
        
        let headers: Headers;
        
        this.logService.logDebug("Set-Cookie: " + data.headers.get("Set-Cookie"));
        
        data.headers.forEach((element, name) => {
             this.logService.logDebug("Found header: " + name + ": " + element);
        });
        
         this.logService.logDebug("Token: " + data.json());
    }
}