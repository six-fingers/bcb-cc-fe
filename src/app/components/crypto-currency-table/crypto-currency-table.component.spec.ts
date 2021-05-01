import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';

import { CryptoCurrencyTableComponent } from './crypto-currency-table.component';

describe('CryptoCurrencyTableComponent', () => {
    let component: CryptoCurrencyTableComponent;
    let fixture: ComponentFixture<CryptoCurrencyTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CryptoCurrencyTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
