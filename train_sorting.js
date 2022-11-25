function train_sort(n, trains) {
  if (n < 0 || n > 2000) {
    throw "The number of cars is invalid";
  }
  let arr = [];

  for (let i = 0; i < trains.length; i++) {
    const element = trains[i];
    if (arr.length === 0) {
      arr.push(element);
    } else if (element < arr[arr.length - 1]) {
      arr.push(element);
    } else if (element > arr[0]) {
      arr.unshift(element);
    }
  }

  return arr.length;
}

console.log("Output: " + train_sort(3, [1, 2, 3]));
console.log("Output: " + train_sort(5, [10, 2, 12, 20, 3]));
