/**
 * Conditional execution
 */
// prompt("Enter the password");
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number");
}

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

/**
 * while and do loops
 */
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result *= 2; // result = result * 2
  counter += 1;
}
console.log(result);

/**
 * Vòng lặp do là một cấu trúc điều khiển tương tự như vòng lặp while.
 * Nó chỉ khác nhau ở một điểm: một vòng lặp do luôn thực thi cơ thể của nó ít nhất một lần và
 *  nó bắt đầu kiểm tra xem nó có nên dừng lại chỉ sau lần thực hiện đầu tiên đó hay không.
 * Để phản ánh điều này, thử nghiệm xuất hiện sau phần thân của vòng lặp.
 * */
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

/**
 * For Loop
 *
 * Nhiều vòng lặp tuân theo mẫu được hiển thị trong các ví dụ trong khi.
 * Đầu tiên, một liên kết "bộ đếm" được tạo để theo dõi tiến trình của vòng lặp.
 * Sau đó, đến một vòng lặp while, thường là với một biểu thức kiểm tra để kiểm tra xem bộ đếm đã đạt đến giá trị cuối hay chưa. Ở cuối thân vòng lặp, bộ đếm được cập nhật để theo dõi tiến trình.
 */
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

result = 1;
for (let counter = 0; counter < 10; counter += 1) {
  result = result * 2;
}
console.log(result);

/**
 * Breaking out of a loop
 *
 * Có điều kiện vòng lặp tạo ra sai không phải là cách duy nhất một vòng lặp có thể kết thúc.
 * Có một tuyên bố đặc biệt gọi là phá vỡ có tác dụng ngay lập tức nhảy ra khỏi vòng bao quanh.
 */
for (let current = 20; ; current += 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

/**
 * Updating binding succinctly
 * 
 * 
 */
