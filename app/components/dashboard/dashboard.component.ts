import {Component, OnInit}   from 'angular2/core';
import {NeedsAuthentication} from '../../decorators/needsAuthentication';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html'
})
@NeedsAuthentication()
export class DashboardComponent implements OnInit {
    
    public hasError: boolean = false;
    
    public constructor() {
    }

    ngOnInit(): any {
    }
}