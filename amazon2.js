function foo(int1, int2) {
  let newInt2 = 0;

  for (let i = 0; i < int1; i++) {
    newInt2 = newInt2 + int2;
  }

  return newInt2;
}

console.log(foo(1, 2));
