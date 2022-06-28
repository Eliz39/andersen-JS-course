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