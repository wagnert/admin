import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {CloseSidebarOnClickDirective} from '../../directives/close.sidebar.on.click.directive';
import {NavigationEntry} from "../../models/navigationEntry";

@Component({
    selector: 'app-sidebar',
    directives: [ROUTER_DIRECTIVES, CloseSidebarOnClickDirective],
    templateUrl: 'app/components/sidebar/sidebar.component.html'
})
export class SidebarComponent {
    public expanded: boolean = true;
    public navigationEntries: Array<NavigationEntry>;

    constructor() {
        this.navigationEntries = [];
        this.navigationEntries.push(new NavigationEntry(['Dashboard'], '', 'Dashboard'));
        this.navigationEntries.push(new NavigationEntry(['Login'], 'login', 'Zum Login ;)'));
    }

    toggleSidebar(): void {
        this.expanded = !this.expanded;
    }
}
