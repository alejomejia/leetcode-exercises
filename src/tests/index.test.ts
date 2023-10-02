import { sum } from '../utils/helper';

describe('sum function', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return NaN if one of the arguments is not a number', () => {
    expect(sum(1, '2')).toBe(NaN);
  });
});