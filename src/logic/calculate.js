import operate from './operate';

export default function calculate({ total, next, operation }, buttonName) {
  let result = {};
  if(buttonName ==='AC'){
    result={total:null,next:null, operation:null}
  }else if(buttonName==='%'){
    result={
      total:(total)?(total):next,
      next: (next) ? (next/100).toString() : buttonName
    }
    console.log("percentage",result);
  }
  else if(buttonName==='+/-'){
    result = {
      total: (total * -1).toString(),
      next: (next * -1).toString(),
    };
  }else if(buttonName ==='+' || buttonName ==='-' || buttonName ==='÷' || buttonName === 'x'){
    result={
      total:(total && operation)?total:next,
      next:null,
      operation:buttonName
    }
  }else if(buttonName ==='='){
    result={
      total:operate(total,next,operation),
      next:null,
      operation:null
    }
  }else{
    result={
      total:(total)?total:next,
      next: (next) ? next + buttonName : buttonName
    }
  }

  return result;
}
