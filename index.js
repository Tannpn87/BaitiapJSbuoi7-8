let numbers = [];

function addNumber() {
  const numberInput = document.getElementById("numberInput");
  const value = Number(numberInput.value);
  numbers.push(value);
  document.getElementById("arrayDisplay").textContent = JSON.stringify(numbers);
  numberInput.value = "";
}

function calculateSum() {
  const sum = numbers.filter((num) => num > 0).reduce((a, b) => a + b, 0);
  document.getElementById(
    "resultDisplay"
  ).textContent = `Tổng các số dương: ${sum}`;
}

function countPositiveNumbers() {
  const count = numbers.filter((num) => num > 0).length;
  document.getElementById(
    "resultDisplay"
  ).textContent = `Số lượng số dương: ${count}`;
}

function findSmallestNumber() {
  const smallest = Math.min(...numbers);
  document.getElementById(
    "resultDisplay"
  ).textContent = `Số nhỏ nhất: ${smallest}`;
}

function findSmallestPositiveNumber() {
  const positiveNumbers = numbers.filter((num) => num > 0);
  const smallestPositive =
    positiveNumbers.length > 0
      ? Math.min(...positiveNumbers)
      : "Không có số dương";
  document.getElementById(
    "resultDisplay"
  ).textContent = `Số dương nhỏ nhất: ${smallestPositive}`;
}

function findLastEvenNumber() {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const lastEven =
    evenNumbers.length > 0 ? evenNumbers[evenNumbers.length - 1] : -1;
  document.getElementById(
    "resultDisplay"
  ).textContent = `Số chẵn cuối cùng: ${lastEven}`;
}

function swapPositions() {
  const pos1 = Number(prompt("Nhập vị trí thứ nhất:"));
  const pos2 = Number(prompt("Nhập vị trí thứ hai:"));

  if (pos1 < numbers.length && pos2 < numbers.length) {
    [numbers[pos1], numbers[pos2]] = [numbers[pos2], numbers[pos1]];
    document.getElementById("arrayDisplay").textContent =
      JSON.stringify(numbers);
    document.getElementById("resultDisplay").textContent =
      "Đã đổi chỗ thành công!";
  } else {
    document.getElementById("resultDisplay").textContent =
      "Vị trí không hợp lệ!";
  }
}

function sortArray() {
  numbers.sort((a, b) => a - b);
  document.getElementById("arrayDisplay").textContent = JSON.stringify(numbers);
  document.getElementById("resultDisplay").textContent =
    "Mảng đã được sắp xếp!";
}

function findFirstPrimeNumber() {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const firstPrime = numbers.find(isPrime) || -1;
  document.getElementById(
    "resultDisplay"
  ).textContent = `Số nguyên tố đầu tiên: ${firstPrime}`;
}

function compareRealNumbers() {
  const realCount = numbers.filter((num) => !Number.isInteger(num)).length;
  document.getElementById(
    "resultDisplay"
  ).textContent = `Số lượng số thực trong mảng: ${realCount}`;
}

function comparePositiveNegative() {
  const positiveCount = numbers.filter((num) => num > 0).length;
  const negativeCount = numbers.filter((num) => num < 0).length;
  const comparison =
    positiveCount > negativeCount
      ? "số dương nhiều hơn"
      : positiveCount < negativeCount
      ? "số âm nhiều hơn"
      : "số lượng bằng nhau";
  document.getElementById(
    "resultDisplay"
  ).textContent = `So sánh: ${comparison}`;
}
