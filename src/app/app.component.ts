import {Component} from 'angular2/core';
import {APP_SERVICES} from './services/all';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginFormComponent} from './components/login-form/login-form.component';

@Component({
    selector: 'admin',
    templateUrl: 'app/app.component.html',
    providers: [APP_SERVICES],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginFormComponent
  }
])

export class AppComponent { }