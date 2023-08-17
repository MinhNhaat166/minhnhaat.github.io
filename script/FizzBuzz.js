for (let number = 1; number <= 100; number += 1) {
  let line = "";
  if (number % 3 == 0) {
    line += "Fizz";
    console.log(line);
  } else if (number % 5 == 0) {
    line += "Buzz";
    console.log(line);
  } else {
    console.log(number);
  }
}

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }
