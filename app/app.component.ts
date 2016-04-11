import {Component} from 'angular2/core';
import {APP_SERVICES} from './services/all';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginFormComponent} from './components/login-form/login-form.component';

@RouteConfig([
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginFormComponent
  }
])

@Component({
    selector: 'admin',
    templateUrl: 'app/app.component.html',
    providers: [ROUTER_PROVIDERS, APP_SERVICES],
    directives: [ROUTER_DIRECTIVES, LoginFormComponent, DashboardComponent]
})
export class AppComponent { }