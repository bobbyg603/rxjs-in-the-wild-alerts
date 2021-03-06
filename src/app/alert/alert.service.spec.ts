import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { AlertColor } from './alert';
import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });

    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('alerts$', () => {
    it('should emit a collection of alerts', async () => {
      const message = 'something broke!';
      const color = AlertColor.Green;
      const autoDismiss = false;
      const resultPromise = firstValueFrom(service.alerts$);
      
      service.pushAlert(message, color, autoDismiss);

      const alerts = await resultPromise;
      expect(alerts).toEqual(
        jasmine.arrayContaining([
          jasmine.objectContaining({
            id: jasmine.any(String),
            message,
            color,
            autoDismiss
          })
        ])
      )
    });
  });
});
