function minimumTime(numOfSubFiles, files) {
  // WRITE YOUR CODE HERE
  let sum = 0;
  let sum1 = 0;
  let val1 = 0;
  let val2 = 0;

  while (files.length > 1) {
    files.sort(function(a, b) {
      return b - a;
    });
    val1 = files.pop();
    val2 = files.pop();
    sum = val1 + val2;
    sum1 = sum + sum1;
    files.push(sum);
  }
  return sum1;
}

console.log(minimumTime(4, [8, 4, 6, 12]));
