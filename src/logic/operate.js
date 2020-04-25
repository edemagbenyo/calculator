import BigJs from 'big.js/index';


const operate = (numerOne, numberTwo, operation) => {
  let result = null;
  switch (operation) {
    case '+':
      result = BigJs(numerOne) + BigJs(numberTwo);
      break;
    case '-':
      result = BigJs(numerOne) - BigJs(numberTwo);
      break;
    case '*':
      result = BigJs(numerOne) * BigJs(numberTwo);
      break;
    case '÷':
      result = BigJs(numerOne) / BigJs(numberTwo);
      break;

    default:
      break;
  }
  return result;
};

export default operate;
