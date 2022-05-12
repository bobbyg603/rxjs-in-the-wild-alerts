import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from "./alert";
import { AlertService } from './alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  alerts$: Observable<Alert[]>;
  
  constructor(private _alertService: AlertService) {
    this.alerts$ = this._alertService.alerts$;
  }

  onRemoveAlertClick(id: string): void {
    this._alertService.dismissAlert(id);
  }
}
