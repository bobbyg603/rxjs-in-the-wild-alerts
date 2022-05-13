// @ts-ignore StackBlitz uuid types error
import { v4 as uuid } from 'uuid';

export enum AlertColor {
  Red,
  Green,
  Yellow
}

export class Alert {
  readonly id = uuid();
  constructor(
    readonly message: string,
    readonly color: AlertColor,
    readonly autoDismiss: boolean = true
  ) { }
}
