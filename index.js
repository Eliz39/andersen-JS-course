// task 1

function concatStrings(str1, sep1) {
  let curStr, separator = '';

  if(typeof str1 === 'string') {
    curStr = str1;

    if(sep1 && typeof sep1 === 'string') {
      separator = sep1;
    }
  } else {
    return curStr;
    }

  return function f(str2, sep2) {

    if (typeof str2 === 'string') {
      curStr += separator + str2;

      if(sep2 && typeof sep2 === 'string') {
       separator = sep2;
      }

      return f;
    }

    return curStr;
  }
}

// task 2

class Calculator {
  constructor(num1, num2) {
    if (!num1 || !num2 || typeof num1 !== 'number' ||
    typeof num2 !== 'number' || !isFinite(num1) || !isFinite(num2)) {
      throw new Error('');
    }
    this.num1 = num1;
    this.num2 = num2;
  }
  setX = (num) => {
    if(!num || typeof num !== 'number' || !isFinite(num)) {
      throw new Error('');
    }
    this.num1 = num;
  }
  setY = (num) => {
    if(!num || typeof num !== 'number' ) {
      throw new Error('');
    }
    this.num2 = num;
  }
  logSum = () => {
    console.log(this.num1 + this.num2);
  }
  logMul = () => {
    console.log(this.num1 * this.num2);
  }
  logSub = () => {
    console.log(this.num1 - this.num2);
  }
  logDiv = () => {
    if(this.num2 === 0) {
      throw new Error('');
    }
    console.log(this.num1 / this.num2);
  }
}