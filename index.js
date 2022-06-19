// task-1
const input11 = prompt('Задание 1. Введите число 1');
const input12 = prompt('Задание 1. Введите число 2');
const errorMessage = 'Некорректный ввод!';

if(isNaN(Number(input11)) || isNaN(Number(input12))) {
  console.log(errorMessage);
} else {
  console.log(Number(input11).toString(Number(input12)))
}

// task-2
const input21 = prompt('Задание 2. Введите число 1');

if(isNaN(Number(input21))) {
  console.log(errorMessage);
} else {
  const input22 = prompt('Задание 2. Введите число 2');
  if(isNaN(Number(input22))) {
      console.log(errorMessage);
  } else {
      console.log(+input21 + +input22, input21 / input22);
  }
}