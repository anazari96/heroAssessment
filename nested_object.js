const typeChecking = (value) => {
  const type = typeof value;
  if (type == "number") {
    return value + 1;
  } else if (type == "string") {
    return value + " AI";
  } else if (type == "object") {
    if (Array.isArray(value)) {
      return value.map((v) => typeChecking(v));
    } else {
      return transformValue(value);
    }
  }
};

const transformValue = (obj) => {
  // Write your solution here. You can create any number of helper functions
  Object.keys(obj).forEach((key) => {
    obj[key] = typeChecking(obj[key]);
  });

  return obj;
};

console.log(
  "Output: ",
  transformValue({
    a: 123,
    b: "hero",
    c: [1, 2, 3],
    d: {
      e: 3,
      f: ["abc", "def"],
    },
  })
);
