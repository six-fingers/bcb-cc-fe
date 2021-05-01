import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-crypto-currency-table',
    templateUrl: './crypto-currency-table.component.html',
    styleUrls: ['./crypto-currency-table.component.scss']
})
export class CryptoCurrencyTableComponent implements OnInit {

    @Input() cryptoCurrency: any;
    @Input() currencyName = '';
    currencyColumns: string[] = ['currencyName', 'currencyValue'];
    dataSource = new MatTableDataSource();

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.cryptoCurrency.currencies);
    }

}
