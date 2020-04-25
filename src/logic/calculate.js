import operate from "./operate";

export default function calculate({total,next,operation},buttonName){
  switch (buttonName) {
    case '+/-':
      total = total * -1;
      next = next * -1;
      break;
    case '+'||'-'||'x'||'÷'||'%':
      total = operate(total,next,operation)
      break;
    default:
      break;
  }
  return{total,next}
}