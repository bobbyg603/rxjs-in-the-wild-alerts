import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertColor } from './alert/alert';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  autoDismiss = true;

  readonly AlertColor = AlertColor;

  constructor(
    private _alertService: AlertService,
    title: Title
  ) {
    title.setTitle('RxJS in the Wild | Alerts');
  }

  onShowAlertClick(message: string, color: AlertColor): void {
    this._alertService.pushAlert(message, color, this.autoDismiss);
  }
}
