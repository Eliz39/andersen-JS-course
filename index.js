// реализация встроенной функции массивов filter

Array.prototype.myFilter = function(callback, thisArg) {
  let context = this;
  if(arguments.length > 1) {
    context = thisArg;
  }

  let filtered = [];

  for (let i = 0; i < this.length; i++) {
    let currEl = this[i];
    if(callback.call(context, currEl, i, 0)) {
      filtered.push(currEl);
    }
  }
  return filtered;
}


// debounce function

function createDebounceFunction(callback, ms) {
  let delay;
  return function() {
    const callbackCall = () => {
      callback.apply(this, arguments)
    }
    clearTimeout(delay);
    delay = setTimeout(callbackCall, ms);
  }
}