function candy_division(n) {
  if (n < 2 || n > 10 ** 12) {
    throw "The number of candies are invalid";
  }
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i - 1);
    }
  }

  return arr;
}

console.log("Output: ", candy_division(30));
console.log("Output: ", candy_division(25));
