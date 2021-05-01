import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { CurrentTradingService } from './current-trading.service';

describe('CurrentTradingService', () => {
    let service: CurrentTradingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });
        service = TestBed.inject(CurrentTradingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
