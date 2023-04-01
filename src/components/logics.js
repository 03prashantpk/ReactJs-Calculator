const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
};

export const calculateResult = (input) => {
    let result = 0;
    let operator = "+";
    let numStr = "";
  
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (/\d/.test(char) || char === ".") {
        numStr += char;
      } else if (/\+|-|\*|\//.test(char)) {
        result = operate(operator, result, parseFloat(numStr));
        if (operator === "/" && parseFloat(numStr) === 0) {
          throw new Error("Division by zero is not allowed");
        }
        if (isNaN(result)) {
          throw new Error("Invalid input");
        }
        operator = char;
        numStr = "";
      }
    }
  
    result = operate(operator, result, parseFloat(numStr));
    if (isNaN(result)) {
      throw new Error("Invalid input");
    }
    return result.toString();
  };
  