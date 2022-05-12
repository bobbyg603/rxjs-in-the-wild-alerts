import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Alert, AlertColor } from './alert/alert';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  alerts$: Observable<Alert[]>;
  autoDismiss = true;

  readonly AlertColor = AlertColor;

  constructor(
    private alertService: AlertService,
    title: Title
  ) {
    this.alerts$ = alertService.alerts$;
    title.setTitle('RxJS in the Wild | Alerts');
  }

  onShowAlertClick(message: string, color: AlertColor): void {
    this.alertService.pushAlert(message, color, this.autoDismiss);
  }
}
