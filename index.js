function concatStrings(str1, sep1) {
  let curStr, separator;
  if(typeof str1 === 'string') {
    curStr = str1;
    if(sep1 && typeof sep1 === 'string') {
      separator = sep1;
      curStr += separator;
    }
  } else {
    return curStr;
   }

  function f(str2, sep2) {

  if (typeof str2 === 'string') {
    curStr += str2;

    if(sep2 && typeof sep2 === 'string' && str2 !== "") {
      separator = sep2;
    }

    if(sep1 || sep2) {
      curStr += separator;
    }

  }

    return f;
  }

  f.toString = () => {

    if(sep1 && sep1.length > 0) {
   	  return curStr.slice(0, curStr.length - (separator.length));
    } else {
   	  return curStr;
    }

  }

   return f
}