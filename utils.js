//1
export const printNumbers = () => {
    let result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(i);
    }
    return result.join(', ');
  };
//2
export const oddNumbersLess100 =()=>{
    let result = [];
    for (let i =1; i<=100; i++){
        if(i%2!=0){
            result.push(i);
        }
    }
    return result.join(', ');
};
//3
export const multiplicationTable7 =()=>{
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push(`7 x ${i} = ${7 * i}`);
      }
      return result.join('\n');  

}
//4
export const multiplicationTable1To10 =()=>{
    let result = [];
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            result.push(`${i} x ${j} = ${i * j}`);
        }
      }
      return result.join('\n');  

}
//5
export const sum1To10 =()=>{
    let result =0;
    for (let i = 1; i <= 10; i++) {
       result+=i;
      }
      return result;

}
//6
export const factorialOf10 = () => {
    let result = 1;
    for (let i = 1; i <= 10; i++) {
      result *= i;
    }
    return result;
  };
  
 //7
export const sumOfEvenNumbers = () => {
    let sum = 0;
    for (let i = 12; i < 30; i += 2) {
      sum += i;
    }
    return sum;
  };
//8
export const celsiusToFahrenheit = (celsius) => {
    return celsius * 9/5 + 32;
  };
//9
export const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
  };
//10
export const sumOfArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };
//11
export const averageOfArray = (arr) => {
    return arr.length > 0 ? sumOfArray(arr) / arr.length : 0;
  };
//12
export const getPositiveNumbers = (arr) => {
    return arr.filter(num => num > 0);
  };
//13
export const findMaxNumber = (arr) => {
    return Math.max(...arr);
  };
//14
export const printFibonacci = () => {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  };
  
  
//15
export const findNthFibonacci = (n) => {
    if (n <= 1) return n;
    return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
  };
//16
export const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
//17
export const sumOfDigits = (num) => {
    return num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  };

//18
export const printFirst100Primes = () => {
    let primes = [];
    let num = 2;
    
    while (primes.length < 100) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  };
//19  
export const getPrimesGreaterThanN = (p, n) => {
    let primes = [];
    let num = n + 1;  
    while (primes.length < p) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  };
//20
export const rotateLeft = (arr) => {
    if (arr.length === 0) return arr;
    return arr.slice(1).concat(arr[0]); 
  };
//21  
export const rotateRight = (arr) => {
    if (arr.length === 0) return arr;
    return [arr[arr.length - 1]].concat(arr.slice(0, -1));  
  };
 //22
 export const reverseArray = (arr) => {
    return arr.slice().reverse();  
  };
//23
export const reverseString = (str) => {
    return str.split('').reverse().join('');  
  };
//24
export const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];  
  };
//25
export const arrayDifference = (arr1, arr2) => {
    return [...arr1.filter(x => !arr2.includes(x)), ...arr2.filter(x => !arr1.includes(x))];
  };
//26
export const arrayElementsNotInSecond = (arr1, arr2) => {
    return arr1.filter(x => !arr2.includes(x));
  };
//27
export const getDistinctElements = (arr) => {
    return [...new Set(arr)]; 
  };
  
//28
import { isPrime } from './utils';  

export const sumFirst100Primes = () => {
  let primes = [];
  let sum = 0;
  let num = 2;
  
  while (primes.length < 100) {
    if (isPrime(num)) {
      primes.push(num);
      sum += num;
    }
    num++;
  }
  return { primes, sum };  
};

//29
export const primeDistances = () => {
    let { primes } = sumFirst100Primes();
    let distances = [];
    
    for (let i = 1; i < primes.length; i++) {
      distances.push(primes[i] - primes[i - 1]);
    }
    
    return distances;  
  };
  
//30
export const addLargeNumbers = (num1, num2) => {
    let result = '';
    let carry = 0;
    
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    
    let maxLength = Math.max(num1.length, num2.length);
    
    for (let i = 0; i < maxLength; i++) {
      let digit1 = parseInt(num1[i] || '0', 10);
      let digit2 = parseInt(num2[i] || '0', 10);
      
      let sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10); 
      result = (sum % 10) + result;  
    }
    
    if (carry > 0) {
      result = carry + result; 
    }
    
    return result;
  };
  
//31
export const countWords = (text) => {
    return text.trim().split(/\s+/).length; 
  };
  
//32
export const capitalizeFirstLetter = (text) => {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
//33
export const sumOfCommaDelimitedNumbers = (str) => {
    return str.split(',')
      .map(num => parseFloat(num.trim()))  
      .reduce((sum, num) => sum + num, 0); 
  };
  
//34
export const getWordsFromText = (text) => {
    return text.trim().split(/\s+/);  
  };
  
//35
export const csvToArray = (csvText) => {
    return csvText.split('\n').map(row => row.split(','));  
  };
  
//36
export const stringToCharArray = (str) => {
    return str.split('');  
  };
  
//37
export const stringToAsciiArray = (str) => {
    return str.split('').map(char => char.charCodeAt(0)); 
  };
  
//38
export const asciiArrayToString = (arr) => {
    return arr.map(code => String.fromCharCode(code)).join('');  
  };
  
//39
export const caesarCipher = (str, shift) => {
    return str.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        let charCode = char.charCodeAt(0);
        let base = charCode >= 65 && charCode <= 90 ? 65 : 97;  
        return String.fromCharCode(((charCode - base + shift) % 26) + base);
      }
      return char;  
    }).join('');
  };
  
//40
export const bubbleSort = (arr) => {
    let n = arr.length;
    let sortedArray = [...arr];  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
       
          [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
        }
      }
    }
    return sortedArray;
  };
  
//41
export const distanceBetweenPoints = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);  
  };
  
//42
export const circlesIntersect = (x1, y1, r1, x2, y2, r2) => {
    const distance = distanceBetweenPoints(x1, y1, x2, y2);
    return distance <= (r1 + r2);  
  };
  
//43
export const extractColumn = (matrix, columnIndex) => {
    return matrix.map(row => row[columnIndex]);  
  };
  
//44
export const binaryToDecimal = (binaryStr) => {
    return parseInt(binaryStr, 2);  
  };
  
//45
export const sumJaggedArray = (arr) => {
    return arr.flat(Infinity).reduce((sum, num) => sum + num, 0); 
  };
  
//46
export const maxJaggedArray = (arr) => {
    return Math.max(...arr.flat(Infinity)); 
  };
  
//47
export const deepCopyJaggedArray = (arr) => {
    return JSON.parse(JSON.stringify(arr));  
  };
  
//48
export const longestWord = (str) => {
    const words = str.split(/\s+/);  
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
  };
  
//49
export const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    return arr;
  };
  
//50
export const uniqueRandomNumbers = (n) => {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    return shuffleArray(arr); 
  };
  
//51
export const letterFrequency = (str) => {
    const freqMap = {};
    for (let char of str) {
      if (/[a-zA-Z]/.test(char)) {  
        char = char.toLowerCase();
        freqMap[char] = (freqMap[char] || 0) + 1;
      }
    }
    return Object.entries(freqMap);  
  };
  
//52
export const fibonacciHighPrecision = (n) => {
    let a = BigInt(0), b = BigInt(1);
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];  
    }
    return b.toString();  
  };
  
//53

export const factorialHighPrecision = (n) => {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i); 
    }
    return result.toString(); 
  };
  