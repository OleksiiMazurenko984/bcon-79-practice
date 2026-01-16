// Task 1
// Напишіть функцію fn1, яка при натисканні кнопки виводить в .out-1 змінну a1.

let a1 = 8;

document.querySelector(".b-1").onclick = fn1;

function fn1() {
  document.querySelector(".out-1").textContent = a1;
}

// Task 2.

// Змінимо задачу 1. Зараз вона тільки виводить змінну в заздалегідь заданий блок.
// Давайте зробимо так, щоб функція була більш гнучкою.
// Нехай тепер функція fn2 повертає (return) змінну a2.
// Оскільки функція повертає змінну, то ім'я функції з дужками (виклик функції) можна вбудовувати у вирази.
// Зверніть увагу, як змінюється виклик функції тепер.

let a2 = 8;

document.querySelector(".b-2").onclick = function () {
  document.querySelector(".out-2").textContent = fn2();

  // а навіщо? А ось
  console.log(5 + fn2()); // тут виведе 13
  console.log(6 * fn2()); // тут 48
  console.log(fn2() * fn2() * fn2()); // 512
};

function fn2() {
  return a2;
}

// Task 3.
// Наша попередня функція все ще сильно залежить від зовнішніх змінних.
// Давайте зробимо її більш універсальною.
// Нехай функція fn3 приймає 2 аргументи і повертає (return) їх добуток.
// Допишіть код функції так, щоб вона повертала добуток двох чисел, переданих їй як аргументи a, b.
// Протестуємо функцію на двох прикладах за допомогою кнопок .b-3-1 та .b-3-2.

function fn3(a, b) {
  return a * b;
}
document.querySelector(".b-3-1").onclick = function () {
  document.querySelector(".out-3-1").textContent = fn3(3, 4);
};
document.querySelector(".b-3-2").onclick = function () {
  document.querySelector(".out-3-2").textContent = fn3(5, 6);
};

// Task 4
// Напишіть функцію fn4, яка приймає ваш рік народження та обчислює (повертає) ваш вік.

document.querySelector(".b-4").onclick = function () {
  document.querySelector(".out-4").textContent = fn4(2004);
};

function fn4(birthYear) {
  return 2026 - birthYear;
}

// Task 5
// Напишіть функцію fn5, яка приймає ваше ім'я як параметр і повертає (return) кількість символів у ньому,
// де name — прийняте як параметр ім'я. Довжину (кількість символів) можна порахувати, використовуючи властивість length.

document.querySelector(".b-5").onclick = function () {
  document.querySelector(".out-5").textContent = fn5("Oleksii");
};

function fn5(userName = "User") {
  return userName.length;
}

// Task 6
// Напишіть функцію fn6, яка приймає 2 числа і повертає випадкове ціле число від першого до другого прийнятого параметра.
// Увага, це перша задача, рішення якої потрібно знайти в Google!

document.querySelector(".b-6").onclick = function () {
  document.querySelector(".out-6").textContent = fn6();
};

function fn6(a = 0, b = 10) {
  return Math.round(Math.random() * (b - a) + a);
}

// Task 7
// Напишіть функцію fn7, яка повертає випадковий колір у форматі rgb(x,y,z) (рядок).
// Де x, y, z — випадкові числа в діапазоні [0, 255].

document.querySelector(".b-7").onclick = function () {
  document.querySelector(".out-7").style.backgroundColor = fn7();
};

function fn7() {
  // отже, одна зі складних задач. Нам потрібно
  // зробити такий рядок
  // rgb(33,123,255) - числа можуть бути будь-які від 0 до 255
  // без пробілів, через коми 33,123,255
  // у вас є функція fn6, яка може генерувати випадкові цілі числа в потрібному діапазоні.
  // давайте скористаємося нею. Просто запустимо її тричі всередині рядка нижче
  // return `rgb(${t6(0,255)}....допишіть самі
  return `rgb(${fn6(0, 255)},${fn6(0, 255)},${fn6(0, 255)})`;
}

//Task 8
// Напишіть функцію fn8, яка приймає рядок як параметр і повертає
// результат з очищеними пробілами на початку і в кінці рядка. Тобто
// приймає _hello_ (де знак _ символізує пробіл), а повертає hello. Для
// видалення пробілів використовуйте trim().

document.querySelector(".b-8").onclick = function () {
  fn8(" Wow it is THE string ");
};

function fn8(a = "_Random_") {
  console.log("🚀 ~ fn8 ~ a:", a.trim());
}

//Task 9
// Напишіть функцію fn9, яка приймає число і повертає true, якщо число
// парне, і false, якщо непарне.

document.querySelector(".b-9").onclick = function () {
  document.querySelector(".out-9").textContent = fn9(33);
};

function fn9(a = 2) {
  return a % 2 === 0;
}

//Task 10
// Створіть функцію fn10, яка приймає 2 числа і повертає більше з них. У
// разі рівності — перше.

document.querySelector(".b-10").onclick = function () {
  document.querySelector(".out-10").textContent = fn10(11, 8);
};

function fn10(a = 0, b = 0) {
  return a >= b ? a : b;
}
