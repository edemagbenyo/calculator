import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('It test the operate function', () => {
  it('add 2 numbers', () => {
    expect(operate(13, 45, '+')).toBe('58');
  });
  it('substract 2 numbers', () => {
    expect(operate(90, 45, '-')).toBe('45');
  });
  it('multiply 2 numbers', () => {
    expect(operate(6, 7, 'x')).toBe('42');
  });
  it('divides 2 numbers', () => {
    expect(operate(90, 3, '÷')).toBe('30');
  });
});

describe('Calculate', () => {
  it('It resets the display', () => {
    expect(
      calculate({ total: 20, next: 19, operation: '+' }, 'AC'),
    ).toEqual({ total: null, next: null, operation: null });
  });
});
