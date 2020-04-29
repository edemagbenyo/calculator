import operate from './operate';

function operands(total, next, operation,buttonName){
  
  if(total && operation){

    return {
      total:total,
      next:null,
      operation:buttonName
    }
  }
  if(total && next && ! operation){
    console.log(`${total} ${next} ${operation}`);
    return {
      total:next,
      next:null,
      operation:buttonName
    }
  }
  if(total){
    return {
      total:total,
      next:null,
      operation:buttonName
    }
  } 
  if(!total){
    return{
      total:next,
      next:null,
      operation:buttonName
    }
  }
}
export default function calculate({ total, next, operation }, buttonName) {
  let result = {};
  if (buttonName === 'AC') {
    result = { total: null, next: null, operation: null };
  } else if (buttonName === '%') {
    result = {
      total: (total) || next,
      next: (next) ? (next / 100).toString() : buttonName,
    };
  } else if (buttonName === '+/-') {
    result = {
      total: (total * -1).toString(),
      next: (next * -1).toString(),
    };
  } else if (buttonName === '+' || buttonName === '-' || buttonName === '÷' || buttonName === 'x') {

    result = operands(total,next,operation,buttonName);
  } else if (buttonName === '=') {
    result = {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  } else {
    result = {
      total: (total) || next,
      next: (next) ? next + buttonName : buttonName,
    };
  }

  return result;
}
