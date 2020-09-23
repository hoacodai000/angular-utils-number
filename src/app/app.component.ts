import { Component, OnInit } from '@angular/core';
import { BigNumber } from './utils/big-number';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-utils-number';

  ngOnInit(): void {
    this.testBigNumber();
  }

  private testBigNumber(): void {
    console.log('result: ', BigNumber.plus('0.111', '0.1123'));
  }
}
