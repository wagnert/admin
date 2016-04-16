import {Component, OnInit}   from 'angular2/core';
import {NeedsAuthentication} from '../../decorators/needsAuthentication';
import {LogService}          from '../../services/log.service';
import {HttpService}         from '../../services/http.service';
import {Configuration}       from '../../app-config';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    providers: [Configuration, HttpService]
})
@NeedsAuthentication()
export class DashboardComponent implements OnInit {
    
    public hasError: boolean = false;
    
    public constructor(
        private httpService: HttpService,
        private logService: LogService) {
    }

    ngOnInit(): any {
        this.httpService.get("applications.do")
            .map(response => response.json())
            .subscribe(
                (applications) => {
                    (data) => this.logService.logDebug("Found applications");
                    (err) => this.logService.logDebug(err);
                    () => this.logService.logDebug("Applications has successfully been loaded!");
                }
            );
    }
}