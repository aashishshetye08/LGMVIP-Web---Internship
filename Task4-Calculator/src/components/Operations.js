export const Operations = (num1, num2, opt) => {

   console.log(num1)
   console.log(num2)
   console.log(opt)

   switch (opt) {
      case "+": return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return (num1 / num2).toFixed(2);
      case '%': return num1 % num2;
      default: return `Invalid Operations`;
   }

}
