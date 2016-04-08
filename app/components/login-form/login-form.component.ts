import {Component, provide}    from 'angular2/core';
import {NgForm}       from 'angular2/common';
import {LoginDto}     from '../../dtos/login.dto';
import {LoginService} from '../../services/login.service';
import {LogService} from '../../services/log.service';
import {ConsoleLogService} from '../../services/consoleLog.service';

@Component({
    selector: 'login-form',
    templateUrl: 'app/components/login-form/login-form.component.html',
    providers: [provide(LogService, { useClass: ConsoleLogService }), LoginDto, LoginService]
})
export class LoginFormComponent {
    
    public constructor(public loginService: LoginService, public dto: LoginDto) {
    }
    
    public login() {
        this.loginService.login(this.dto);
    }
}