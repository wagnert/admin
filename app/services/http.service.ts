import {Injectable}                                  from 'angular2/core';
import {Http, RequestOptionsArgs, Response, Headers} from 'angular2/http';
import {Observable}                                  from 'rxjs/Observable';
import {Configuration}                               from '../app-config';
import {TokenService}                                from './token.service';

@Injectable()
export class HttpService {
    constructor(
        private http: Http, 
        private config: Configuration, 
        private tokenService: TokenService) {
    }

    private buildUrl(appendix: string): string{
        return `${this.config.apiEndpoint}${appendix}`;
    }

    request(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.buildUrl(url);
        options = this.prepareOptions(options);
        return this.http.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.buildUrl(url);
        options = this.prepareOptions(options);
        return this.http.get(url, options);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.buildUrl(url);
        options = this.prepareOptions(options);
        return this.http.post(url, body, options);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.buildUrl(url);
        options = this.prepareOptions(options);
        return this.http.put(url, body, options);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.buildUrl(url);
        options = this.prepareOptions(options);
        return this.http.delete(url, options);
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.buildUrl(url);
        options = this.prepareOptions(options);
        return this.http.patch(url, body, options);
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.buildUrl(url);
        options = this.prepareOptions(options);
        return this.http.head(url, options);
    }

    protected prepareOptions(options: RequestOptionsArgs): RequestOptionsArgs {
        var token = this.tokenService.token;

        if (token) {
            
            options = options ||{ };

            if (!options.headers) {
                options.headers = new Headers();
            }

            options.headers.append('Authorization', 'Bearer ' + token);
        }

        return options;
    }
}