import {Directive, HostListener} from 'angular2/core';

@Directive({
    selector: '[close-sidebar-on-click]'
})
export class CloseSidebarOnClickDirective {
    constructor() {
    }

    @HostListener('click')
    public onClick() {
        document.body.classList.remove('sidebar-open');
    }
}
