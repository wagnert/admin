import {Component, provide}    from 'angular2/core';
import {Router}                from 'angular2/router';
import {NgForm}                from 'angular2/common';
import {LoginDto}              from '../../dtos/login.dto';
import {LoginService}          from '../../services/login.service';
import {LogService}            from '../../services/log.service';
import {ConsoleLogService}     from '../../services/consoleLog.service';

@Component({
    selector: 'login-form',
    templateUrl: 'app/components/login-form/login-form.component.html',
    providers: [provide(LogService, { useClass: ConsoleLogService }), LoginDto, LoginService]
})
export class LoginFormComponent {
    
    public hasError: boolean = false;
    
    public constructor(
        private router: Router,
        private loginService: LoginService, 
        private logService: LogService,
        public dto: LoginDto) {
    }
    
    public login() {
        this.loginService.login(this.dto)
            .subscribe(
                () => {
                    this.setError(false);
                    this.router.navigate(['Dashboard']);
                },
                () => {
                    this.setError(true);
                    this.logService.logDebug('Login was unsuccessful.');
                }
            );
    }

    setError(value: boolean) {
        this.logService.logDebug('LoginForm.setError: Setting error state to: ' + value);
        this.hasError = value;
    }
}