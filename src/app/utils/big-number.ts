import { Injectable } from '@angular/core';
import Big from 'big.js';

@Injectable()
export class BigNumber {
  /**
   * Handle number with big.js.
   *
   * @example
   * In Angular:
   * ```
   *  import { BigNumber } from './utils/big-number';
   *  ...
   *  BigNumber.isNumber(...);
   *  BigNumber.isNumeric(...);
   *  BigNumber.multiply(..., ...);
   *  BigNumber.divide(..., ...);
   *  BigNumber.subtract(..., ...);
   *  BigNumber.numberCutTo(..., ...);
   *  BigNumber.plus(..., ...);
   *  BigNumber.roundTo(..., ..., ...);
   * ```
   */
  constructor() { }

  /**
   * isNumber
   * @param value
   * @returns {boolean}
   */
  public static isNumber(value: number | any): value is number {
    return (typeof value === 'number');
  }

  /**
   * isNumeric
   * @param numeric
   * @returns {boolean}
   */
  public static isNumeric(numeric: any): boolean {
    numeric = '' + numeric;
    return !isNaN(numeric) && !isNaN(parseFloat(numeric));
  }

  /**
   * multiply
   * @param number1
   * @param number2
   * @returns {number}
   */
  public static multiply(number1: string | number, number2: string | number): number {
    return +Big(number1).times(number2).valueOf();
  }

  /**
   * divide
   * @param number1
   * @param number2
   * @returns {number}
   */
  public static divide(number1: string | number, number2: string | number): number {
    return +Big(number1).div(number2).valueOf();
  }

  /**
   * subtract
   * @param number1
   * @param number2
   * @returns {number}
   */
  public static subtract(number1: string | number, number2: string | number): number {
    return +Big(number1).minus(number2).valueOf();
  }

  /**
   * plus
   * @param number1
   * @param number2
   * @returns {number}
   */
  public static plus(number1: string | number, number2: string | number): number {
    return +Big(number1).plus(number2).valueOf();
  }

  /**
   * numberCutTo
   * @param number
   * @param decimal
   * @returns {number}
   */
  public static numberCutTo(number: string | number, decimal: number = 2): number {
    return +Big(number).toFixed(decimal).valueOf();
  }

  /**
   * roundTo
   * @param number
   * @param decimal
   * @param roundMode // 0 = Down, 3 = Up
   * @returns {number}
   */
  public static roundTo(number: string | number, decimal: number = 2, roundMode: number = 0): number {
    return +Big(number).round(decimal, roundMode).valueOf();
  }
}