const add = (num1: number, num2: number, showResult: boolean, phrase: string) => {
    const result = num1 + num2;
    return showResult ? console.log(phrase + result) : result; 
};

const number1 = 5;
const number2 = 3;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
