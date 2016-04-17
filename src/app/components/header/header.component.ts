import {Component, OnInit, provide} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {LoginService} from '../../services/login.service';
import {TokenService} from '../../services/token.service';
import {LogService} from '../../services/log.service';
import {ConsoleLogService}     from '../../services/consoleLog.service';
import {Configuration}       from '../../app-config';
import {BackButtonDirective} from '../../directives/back.button.directive';

@Component({
    selector: 'app-header',
    directives: [NgClass, BackButtonDirective],
    templateUrl: 'app/components/header/header.component.html',
    providers: [provide(LogService, { useClass: ConsoleLogService }), LoginService, Configuration]
})
export class HeaderComponent implements OnInit {
    public loggedIn: boolean = false;
    public currentLocation: string = '';

    constructor(
        public loginService: LoginService, 
        private _tokenService: TokenService, 
        private _logService: LogService
    ) {}

    ngOnInit(): any {
        this._tokenService.check().subscribe(result => {
            this._logService.logDebug('Headerbar: Received notification about tokenstore status change. Result: ' + result);
            this.loggedIn = result
        });
    }

    logout(event): void {
        event.preventDefault();
        this.loginService.logout();
    }
}
