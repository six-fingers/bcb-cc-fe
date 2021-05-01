import { HttpEvent } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { ICryptoCurrrency } from './interfaces/crypto-currency.interface';
import { CurrentTradingService } from './services/current-trading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'Current Trading';
    public cryptoCurrencies: ICryptoCurrrency[] = [];
    public selectedRefreshInterval = 5;
    public refreshIntervals = [2, 5, 10];
    private intervalSubscription: Subscription = interval(this.selectedRefreshInterval * 1000).subscribe();

    constructor(
        private _currentTradingService: CurrentTradingService
    ) { }

    ngOnInit(): void {
        this._getCryptoCurrencies();
        this._subscribe();
    }

    public changeInterval(event: Event): void {
        const selectElement = event.target as HTMLInputElement;
        this.selectedRefreshInterval = parseInt(selectElement.value, 10);
        this._subscribe();
    }

    private _getCryptoCurrencies(): void {
        this._currentTradingService.getCurrentTradingObservable().subscribe(
            (response: ICryptoCurrrency[]) => {
                this.cryptoCurrencies = response;
            },
            (error) => console.log('error', error)
        );
    }

    private _subscribe(): void {
        this.intervalSubscription.unsubscribe();
        this.intervalSubscription = interval(this.selectedRefreshInterval * 1000).subscribe(() => {
            this._getCryptoCurrencies();
        });
    }

}
