// task 1
function makeObjectDeepCopy(originalObj) {
  const copyObj = {};
  if (originalObj && originalObj !== null) {

    for (let el in originalObj) {
      if (typeof originalObj[el] !== 'object') {
        copyObj[el] = originalObj[el];
      } else {
        copyObj[el] = makeObjectDeepCopy(originalObj[el]);
      }
    }

  }
  return copyObj;
}

// task 2

function selectFromInterval(array, value1, value2) {
  let filtered = [];
  let startValue = value1;
  let endValue = value2;

  if (Array.isArray(array) && typeof value1 === 'number' && typeof value2 === 'number') {
    if (array.every((el) => typeof el === 'number')) {
      if (value1 > value2) {
        startValue = value2;
        endValue = value1;
      }
      filtered = array.filter((num) => num >= startValue && num <= endValue);
      return filtered;
    }
  }
  throw new Error('Некорректный ввод!');
}

// task 3

const myIterable = {
  from: 1,
  to: 4,

   [Symbol.iterator]() {
     if (myIterable.from > myIterable.to || typeof myIterable.from !== 'number' || typeof myIterable.to !== 'number') {
        throw new Error('Некорректный ввод!');
     }
     return {
       next() {
        const result = {
          value: myIterable.from,
          done: myIterable.from === myIterable.to
        }
        myIterable.from = myIterable.from + 1

        return result;
       }
     }
    }
}