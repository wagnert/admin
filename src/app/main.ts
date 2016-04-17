///<reference path="../../typings/browser.d.ts"/>

import {bootstrap}        from 'angular2/platform/browser';
import {ComponentRef, provide}   from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS}   from 'angular2/http';
import {AppComponent}     from './app.component';
import {appInjector}      from './services/app.injector';
import {TokenService}     from './services/token.service';
import {LogService}       from './services/log.service';

bootstrap(AppComponent, [
    HTTP_PROVIDERS, 
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    LogService,
    TokenService
]).then((appRef: ComponentRef) => {
    // Store a reference to the injector workaround for Dependency Injection in Router lifecycle hook
    appInjector(appRef.injector);
});