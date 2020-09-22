/**
 * Mask number of a value.
 *
 * @example
 * In Angular:
 * ```
 *  import * as IMASK from '../../../app/helper/mask-number';
 *  ...
 *  IMASK.MASK_NUMBER_DEFAULT;
 *  ...
 *  import IMask from 'imask/esm/imask';
 *  maskNumber: IMask.MaskedNumber = new IMask.MaskedNumber(IMASK. ...);
 *  [imask] = maskNumber
 *  
 *  ... Update Options ...
 *  this.maskNumber.updateOptions({[key: string]: value});
 * ```
 */

export type MaskType = NumberConstructor;

export interface MaskNumber {
    mask: MaskType
    scale: number,
    signed: boolean,
    thousandsSeparator?: string,
    padFractionalZeros?: boolean,
    normalizeZeros?: boolean,
    radix?: string,
    mapToRadix?: Array<string>,
    min?: number,
    max?: number
}

export const MASK_NUMBER_DEFAULT: MaskNumber = {
    mask: Number,
    scale: 2,
    signed: false,
    thousandsSeparator: '',
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: '.',
    mapToRadix: ['.'],
    min: -1000000000,
    max: 1000000000
};

export const MASK_NUMBER_ALLOW_NEGATIVE: MaskNumber = {
    mask: Number,
    scale: 2,
    signed: true,
    thousandsSeparator: ',',
    padFractionalZeros: true,
    normalizeZeros: false,
    radix: '.',
    mapToRadix: ['.']
};

export const MASK_NUMBER_ONLY_POSITIVE: MaskNumber = {
    mask: Number,
    scale: 2,
    signed: false,
    thousandsSeparator: ',',
    padFractionalZeros: true,
    normalizeZeros: false,
    radix: '.',
    mapToRadix: ['.']
};

export const MASK_NUMBER_INTERGER_ALLOW_NEGATIVE: MaskNumber = {
    mask: Number,
    scale: 0,
    signed: true
};

export const MASK_NUMBER_INTERGER_ONLY_POSITIVE: MaskNumber = {
    mask: Number,
    scale: 0,
    signed: false
};

export const MASK_NUMBER_PERCENT: MaskNumber = {
    mask: Number,
    scale: 2,
    signed: false,
    thousandsSeparator: ',',
    padFractionalZeros: false,
    normalizeZeros: false,
    radix: '.',
    mapToRadix: ['.'],
    min: 0,
    max: 100
};