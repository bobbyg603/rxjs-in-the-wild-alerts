import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertColorClassNamePipe } from './alert/alert-color-class-name.pipe';
import { AlertComponent } from './alert/alert.component';
import { NgxToggleModule } from '@bobbyg603/ngx-toggle';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AlertColorClassNamePipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
