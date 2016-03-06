function checkEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return checkEven(-n);
  else
    return checkEven(n - 2);
}

console.log(checkEven(8));
//->true
console.log(checkEven(11));
//->false