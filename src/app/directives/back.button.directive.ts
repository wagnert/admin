import {Directive, HostListener} from 'angular2/core';
import {Location} from 'angular2/router';

@Directive({
    selector: '[back-button]',
    host: {
        '[attr.hidden]': 'isHidden'
    }
})
export class BackButtonDirective {
    public isHidden: boolean = true;

    constructor(private _location: Location) {
        this.isHidden = false;
    }

    @HostListener('click')
    public onClick() {
        this._location.back();
    }
}
