## 🐯🚨📐 RxJS in the Wild: How to Create Pop-up Alerts

<img alt="Cute Tiger Cub" src="https://github.com/bobbyg603/rxjs-in-the-wild-alerts/assets/2646053/6c824179-1623-4a84-a88c-7d94648f8eae" width="540px" height="auto">

[![medium profile link](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/javascript-in-plain-english/rxjs-in-the-wild-how-to-create-pop-up-alerts-69134162c8b2)
[![twitter profile link](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/bobbyg603/status/1605611914595553280)
[![StackBlitz](https://img.shields.io/badge/StackBlitz-Edit-blue?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABECAYAAAD+1gcLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AINBw4X0bTGRQAABSxJREFUaN7VmVtsFFUYx//fmQW79bbd2QKpaIIaDcGoifFBEgMGqTTRRA01SgxE5Rbi7QG6S3lgo9J2twpeotxEQlCigLdoQwJ4ARN9QB9MRCNRDBdRzE7LJbTSmTl/H4BYStmd2Z3tDOdt5lzml/9833fO9x0gYi2xgom6Tt5aapyKEnRDlrVGPzfGT+G3SwZ87HLGT8f5uYD7jmSl99IAX80RfTY3A5wMqDVepoQPnqVKHtMbAN4PyJeFtPwafXBSknG9UoDHAIDQq7xODRU8mdc5Aeaeffy7O2F8GnnwZM5dKsCic88CrMU8sSMNbubdZwTIDnjlOoZa52eNYQc3c84sEK+d/1a6ji2UA5EFN3POw4C8fcYy/m+a3p1y2MGTOXsqIJsAxAZ1Hei53tgeSfBkBycK1McALrswJGIVHhE3cuD1ed4uorsAXD5Ed7/hqvXlrFtV8LpO3qKpdwJIDLn/AB/+s0SORgp8VJ43KK23AzAvNsagWlXu+lKV6LGc14itvyEwrsiwX6wWNQEijITiY9pYD1vvKAENAG+VC40hQlNlNt3Bq22lt4EYX2Jor6PVe5V8KzDFG7KsFXE/A3GHB/vcdHyx9IQPnuXI/ji3CuRuT+N1+U4ZHPhmGqk43yXY5C0ccE9hsfwQLjgp5n69hmCz9ylYGcRPrgg8ldfLIXjSx5RjNX3GB6GCm3m3ncDz/v4QNnjJ4KsGbubdVhAZ35YFtTaoKOY7jps5dwGIZf73aH7dnZa9QYH72vLNDmcmRNaX86eEnGvT2BoIdA0o3pV2HgRkS9C7bXnRDGlPypmd9r2AvB8FaAFetDJGvqTiyU7eJWeOp1cgfOo3rRbj6ZJRJdHB20TrrkhAAxutXvVsSedMtfEmGno3gNHhM8snVp80IytO0The18HraOgdkYCm7KyLy6MDoYdUfNQyjnZjeheAm8NXmt/FlDH16CI5dUHaN/DhypeZUqK/AkomAsMQ8fCjq41GKy0nim75ydd51UjX3QZgQgQccV/MUfcVSzYM4Mw1hnPa7QJkYgSgD2qqe6xWOVL8kLWaI3ptbgFkUgSgjwpUY09GDpY8ZJnH9UsExhPYH8CuVgtgTJlzC5pqipXxdpUSaF3FzLkdANJleOIJETWlkJbvh78glOVIM64PARjlc2afiGoqtMiuUMoTqRp3ehnQtpDNfqEDBdeC+T6nuELOLGRiXVVPJC5u2xwP6L0+1qOQ8wqZWNmpXECK6wV+RBCipRLoQBRvyLL2dFwfBlDnTWos7W4xXgi3IATg31p3hldoEG8EAR0IuEC8OuUGK62eCyoYVARutvNOL9VZQD6yxqmnKqmHB6u46PkejHp7XVxmlHOzVhXnTKxgwujXhzH0bdo56m9jymgcKhEITXFl61lFoYV7BMa0akCjkjqJEHOKdP/U7xhNJ1vlZLXOv2Upnmq3JxfJlH4XRzWebBWrmgf38hRXav5F4vSfjqGmHl8if1W/NuSzjWljvW3oQxh0Ly9AQRtqUvdC+Xk4UiXfpmLH9JzB0CBOQKtpwwXtHzxLJcTsQW97FdQDQVxIVc3GUzVuEyEDb4z7NTndysju4c6qfSlOOc8pXQof78nEtoVRDvDsnMlXeK04+o+ztRgSnNOdjq1DSM2z4uLoeecKSCQWhgntXfEsY2ZcHwDQAMESq8VoC7ty5EnxZK37EIAGAV6NArT3c3def2Hm3HdASlSYSipe384bAR6x+tTsIBOBqoMTzlirVz2BrOgoWcF/mizikfkwKiQAAAAASUVORK5CYII=)](https://stackblitz.com/edit/github-ms1wfi)

This is a companion repo for [RxJS in the Wild: How to Create Pop-up Alerts](https://medium.com/javascript-in-plain-english/rxjs-in-the-wild-how-to-create-pop-up-alerts-69134162c8b2) that demonstrates how to build a beautifully simple Alert system using [Angular](https://angular.io/), [ng-bootstrap](https://ng-bootstrap.github.io/#/home), and [RxJS](https://rxjs.dev/).

## ☕️ TL;DR

Clone this repo to your workspace:

```sh
git clone https://github.com/bobbyg603/rxjs-in-the-wild-alerts
```

Install the dependencies and start the application:

```sh
cd rxjs-in-the-wild-alerts && npm i && npm start
```

Point your browser to https://localhost:4200 and click on the buttons to reveal errors of various colors. You can also toggle off the Auto Dismiss button to keep the alerts around until you interact with them.

![rxjs-in-the-wild](https://github.com/bobbyg603/rxjs-in-the-wild-alerts/assets/2646053/c4d9e7ca-eabf-4347-9320-f69523a54f41)

## 🕵️ Inspecting the Code

In [alert.service.ts](https://github.com/bobbyg603/rxjs-in-the-wild-alerts/blob/main/src/app/alert/alert.service.ts) we created a stateful service that contains an observable array of `alerts$` to be displayed by the Alert Component. We need ways to push alerts, dismiss alerts, and dismiss alerts after a timeout if the alert should be dismissed automatically.

```ts
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, Subject, timer } from 'rxjs';
import { Alert, AlertColor } from './alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  private _state: Alert[] = [];
  private _alertSubject = new Subject<Alert[]>();
  private _alerts$?: Observable<Alert[]>;

  get alerts$(): Observable<Alert[]> {
    if (!this._alerts$) {
      this._alerts$ = this._alertSubject.asObservable();
    }

    return this._alerts$;
  }

  dismissAlert(id: string): void {
    this.removeAlert(id);
  }

  pushAlert(message: string, color: AlertColor = AlertColor.Red, autoDismiss: boolean = true): void {
    const alert = new Alert(message, color, autoDismiss);
    
    if (autoDismiss) {
      firstValueFrom(
        timer(5000)
      ).then(() => this.removeAlert(alert.id));
    }

    this.addAlert(alert);
  }

  private addAlert(alert: Alert): void {
    this._state = this._state.concat(alert);
    this._alertSubject.next(this._state);
  }

  private removeAlert(id: string): void {
    this._state = this._state.filter(alert => alert.id !== id);
    this._alertSubject.next(this._state)
  }
}
```

In [alert.component.ts](https://github.com/bobbyg603/rxjs-in-the-wild-alerts/blob/main/src/app/alert/alert.component.ts) we expose the `alerts$` observable and expose a mechanism to dismiss alerts when they are clicked.

```ts
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
```

The [alert.component.html](https://github.com/bobbyg603/rxjs-in-the-wild-alerts/blob/main/src/app/alert/alert.component.html) template uses [`*ngFor`](https://angular.io/tutorial/first-app/first-app-lesson-08) and the [`async` pipe](https://angular.io/api/common/AsyncPipe) to display the observable `alerts$` collection. A class is added to the alert div by transforming the alert via the `alertColorClassName` pipe and using the resulting value as an input to the div's `ngClass` property.

```html
<ng-container *ngIf="alerts$ | async as alerts">
  <ul *ngIf="alerts?.length">
    <li *ngFor="let alert of alerts">
      <div class="d-flex justify-content-between rounded cursor-pointer p-3 mt-2 w-100"
        [ngClass]="alert | alertColorClassName" (click)="onRemoveAlertClick(alert.id)">
        <div></div>
        <div>
          {{alert.message}}
        </div>
        <div>
          <button type="button" class="btn-close float-right" aria-label="Close"></button>
        </div>
      </div>
    </li>
  </ul>
</ng-container>
```

In [alert-color-class-name.pipe.ts](https://github.com/bobbyg603/rxjs-in-the-wild-alerts/blob/main/src/app/alert/alert-color-class-name.pipe.ts) we add a transform that converts the `AlertColor` enum to a [Bootstrap color](https://getbootstrap.com/docs/5.0/customize/color/) class.

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { Alert, AlertColor } from './alert';

@Pipe({
  name: 'alertColorClassName'
})
export class AlertColorClassNamePipe implements PipeTransform {

  transform(alert: Alert): string {
    if (alert?.color === AlertColor.Green) {
      return 'alert-success';
    }

    if (alert?.color === AlertColor.Yellow) {
      return 'alert-warning';
    }

    return 'alert-danger';
  }
}
```

Finally, in [app.component.ts](https://github.com/bobbyg603/rxjs-in-the-wild-alerts/blob/main/src/app/app.component.ts) we add some methods that we can use to display alerts.

```ts
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
```

## 🧑‍💻 Next Steps

If you liked this example, please follow me on [Medium](https://bobbyg603.medium.com/) and [X](https://twitter.com/bobbyg603), where I post programming tutorials and discuss tips and tricks that have helped make me a better programmer.

**Thank you for your support ❤️**
