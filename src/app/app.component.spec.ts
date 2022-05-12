import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { NgxToggleComponent } from '@bobbyg603/ngx-toggle';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(AlertComponent),
        MockComponent(NgxToggleComponent)
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have title 'RxJS in the Wild | Alerts'`, () => {
    expect(TestBed.inject(Title).getTitle()).toEqual('RxJS in the Wild | Alerts');
  });
});
