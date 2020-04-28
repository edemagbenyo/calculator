import BigJs from 'big.js/big';


const operate = (numerOne, numberTwo, operation) => {
  let result = null;
  switch (operation) {
    case '+':
      result = BigJs(numerOne).plus(BigJs(numberTwo)).toString();
      break;
    case '-':
      result = BigJs(numerOne).minus(BigJs(numberTwo)).toString();
      break;
    case 'x':
      result = BigJs(numerOne).times(BigJs(numberTwo)).toString();
      break;
    case '÷':
      result = BigJs(numberTwo).eq(0) ? NaN : BigJs(numerOne).div(BigJs(numberTwo)).toString();
      break;
    default:
      break;
  }
  return result;
};

export default operate;
