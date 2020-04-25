import operate from './operate';

export default function calculate({ total, next, operation }, buttonName) {
  let result = {};
  switch (buttonName) {
    case '+/-':
      result = {
        total: (total * -1),
        next: (next * -1),
      };
      break;
    case '+' || '-' || 'x' || '÷' || '%':
      result = operate(total, next, operation);
      break;
    default:
      break;
  }
  return result;
}
