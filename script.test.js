import {isValidName, isValidCVV, isValidCardNumber} from './script.js';

describe('Валидация имени', () => {
  it('Имя введено корректно', () => {
    expect(isValidName('John Smith')).toBe(true);
  });

  it('Имя введено корректно', () => {
    expect(isValidName('john Smith')).toBe(true);
  });

  it('Имя введено некорректно', () => {
    expect(isValidName('John123')).toBe(false);
  });

  it('Имя введено некорректно', () => {
    expect(isValidName('john,+78')).toBe(false);
  });

  it('Имя введено некорректно', () => {
    expect(isValidName('Петр')).toBe(false);
  });
});

describe('Валидация номера карты', () => {
  it('номер карты введен корректно', () => {
    expect(isValidCardNumber('5555 5555 5555 5555')).toBe(true);
  });

  it('номер карты введен корректно', () => {
    expect(isValidCardNumber('1234567890123456')).toBe(true);
  });

  it('номер карты введен некорректно', () => {
    expect(isValidCardNumber('5555 777 892')).toBe(false);
  });

  it('номер карты введен некорректно', () => {
    expect(isValidCardNumber('fghfg 777 892 ,,.')).toBe(false);
  });

  it('номер карты введен некорректно', () => {
    expect(isValidCardNumber('номер 777 ,,.')).toBe(false);
  });
});

describe('Валидация CVV', () => {
  it('CVV введен корректно', () => {
    expect(isValidCVV('5555')).toBe(true);
  });

  it('CVV введен корректно', () => {
    expect(isValidCVV('123')).toBe(true);
  });

  it('CVV введен некорректно', () => {
    expect(isValidCVV('55')).toBe(false);
  });

  it('CVV введен некорректно', () => {
    expect(isValidCVV('fghfg')).toBe(false);
  });

  it('CVV введен некорректно', () => {
    expect(isValidCVV('цвв')).toBe(false);
  });

  it('CVV введен некорректно', () => {
    expect(isValidCVV('c,vv')).toBe(false);
  });
});