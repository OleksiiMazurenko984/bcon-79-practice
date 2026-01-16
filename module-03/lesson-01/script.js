// Task-1

const btn1 = document.querySelector(".b-1");
const ar1 = ["random", true, 2, 15, -5];

btn1.onclick = fn1;

function fn1() {
  const out1 = document.querySelector(".out-1");

  out1.textContent = `[ ${ar1} ]`;
}

// Task-2

const btn2 = document.querySelector(".b-2");
const ar2 = ["random", true, 2, 15, -5];

btn2.onclick = fn2;

function fn2() {
  const out2 = document.querySelector(".out-2");
  let result = "";
  for (const item of ar2) {
    result += `${item} `;
  }

  out2.textContent = result;
}

// Task-3
const btn3 = document.querySelector(".b-3");
const ar3 = ["random", true, 2, 15, -5];

btn3.onclick = fn3;

function fn3() {
  const out3 = document.querySelector(".out-3");

  out3.textContent = ar3.length;
}

// Task-4

const btn4 = document.querySelector(".b-4");
const ar4 = Array.from(Array(10).keys(), x => x + 1);
//const ar41 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log("🚀 ~ ar4:", ar4);
btn4.onclick = fn4;

function fn4() {
  const out4 = document.querySelector(".out-4");

  out4.textContent = `${ar4[0]} ${ar4[3]} ${ar4[8]}`;
}

// Task-5

const btn5 = document.querySelector(".b-5");
const ar5 = Array.from(Array(10).keys(), x => (x + 1) * 10);
btn5.onclick = fn5;

function fn5() {
  const out5 = document.querySelector(".out-5");

  out5.textContent = ar5[0] + ar5[2] + ar5[3];
}

// Task-6

const btn6 = document.querySelector(".b-6");
const ar6 = ["Олексій", "Терези", "Понеділок", "Квітень"];
btn6.onclick = fn6;

function fn6() {
  const out6 = document.querySelector(".out-6");
  let result = "";

  //   for (const item of ar6) {
  //     result += item + " ";
  //   }

  out6.textContent = ar6.join(" ");
}

// Task-7

const btn7 = document.querySelector(".b-7");
const ar7 = [];
btn7.onclick = fn7;

function fn7() {
  const out7 = document.querySelector(".out-7");
  let result = "";
  ar7[7] = "vietnam";
  ar7[6] = "turkey";
  ar7[5] = "italy";

  for (const item of ar7) {
    result += item + " ";
  }
  out7.textContent = result;
}

// Task-8

const btn8 = document.querySelector(".b-8");
const ar8 = [];
btn8.onclick = fn8;

function fn8() {
  const out8 = document.querySelector(".out-8");
  const out81 = document.querySelector(".out-8-1");
  let result = "";
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;

  for (const item of ar8) {
    result += `${item}—`;
  }
  out8.textContent = result;
  out81.textContent = ar8.length;
}

// Task-9

const btn9 = document.querySelector(".b-9");
const ar9 = Array.from(Array(10).keys(), x => x + 1);
btn9.onclick = fn9;

function fn9() {
  const out9 = document.querySelector(".out-9");

  out9.textContent = ar9[ar9.length - 1];
}

// Task-10

const btn10 = document.querySelector(".b-10");
const ar10 = [100, 200, 300, 400, 700, 121];
btn10.onclick = fn10;

function fn10() {
  const out10 = document.querySelector(".out-10");

  out10.textContent = ar10[1] + ar10[ar10.length - 1];
}

// Task-11

const btn11 = document.querySelector(".b-11");
const ar11 = [2, 3, 4, 5, 6, 7];
btn11.onclick = fn11;

function fn11() {
  const out11 = document.querySelector(".out-11");
  let result = "";
  const temp = ar11[2];
  ar11[2] = ar11[4];
  ar11[4] = temp;

  for (const item of ar11) {
    result += `${item} `;
  }
  out11.textContent = result;
}

// Task-12
const btn12 = document.querySelector(".b-12");
const ar12 = ["test", "west", "list", "class", "best"];
btn12.onclick = fn12;

function fn12() {
  const out12 = document.querySelector(".out-12");
  let result = "";
  const temp = ar12[0];
  ar12[0] = ar12[ar12.length - 1];
  ar12[ar12.length - 1] = temp;

  out12.textContent = ar12.join(" ");
}
// Task-13

const btn13 = document.querySelector(".b13-");
const ar13 = ["test", "west", "list", "class", "best"];
btn13.onclick = fn13;

function fn13() {
  const out13 = document.querySelector(".out-13");
  let result = "";

  for (let i = 0; i < ar13.length; i++) {
    result += `${i} ${ar13[i]} `;
  }
  out13.textContent = result;
}

// Task-14

const btn14 = document.querySelector(".b-14");
const ar14 = [1, 2, 3, "hello", 66];
btn14.onclick = fn14;

function fn14() {
  const out14 = document.querySelector(".out-14");
  out14.textContent = ar14.toReversed();
}

// Task-15

const btn15 = document.querySelector(".b-15");
const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
btn15.onclick = fn15;

function fn15() {
  const out15 = document.querySelector(".out-15");
  let result = "";
  for (const item of ar15) {
    if (item > 0) {
      result += `${item} `;
    }
  }

  out15.textContent = result;
}

// Task-16

const btn16 = document.querySelector(".b-16");
const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const ar16_odd = [];
const ar16_even = [];

btn16.onclick = fn16;

function fn16() {
  const out16_odd = document.querySelector(".out-16-odd");
  const out16_even = document.querySelector(".out-16-even");

  ar16_odd.length = 0;
  ar16_even.length = 0;

  for (let i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
      ar16_even[ar16_even.length] = ar16[i];
    } else {
      ar16_odd[ar16_odd.length] = ar16[i];
    }
  }

  out16_odd.textContent = ar16_odd.join(" ");
  out16_even.textContent = ar16_even.join(" ");
}

// Task-17

const btn17 = document.querySelector(".b-17");
const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
btn17.onclick = fn17;

function fn17() {
  const out17 = document.querySelector(".out-17");
  let counter = 0;
  for (const item of ar17) if (item > 3) counter++;

  out17.textContent = counter;
}

// Task-18

const btn18 = document.querySelector(".b-18");
const ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
btn18.onclick = fn18;

function fn18() {
  const out18 = document.querySelector(".out-18");
  let maxNum = ar18[0];
  for (const item of ar18) if (item > maxNum) maxNum = item;

  out18.textContent = maxNum;
}

// Task-19

const btn19 = document.querySelector(".b-19");
const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
btn19.onclick = fn19;

function fn19() {
  const out19 = document.querySelector(".out-19");
  let minNumIndex = 0;

  for (let i = 1; i < ar19.length; i++) {
    if (ar19[i] < ar19[minNumIndex]) {
      minNumIndex = i;
    }
  }

  out19.textContent = minNumIndex;
}

// Task-20

const btn20 = document.querySelector(".b-20");
const ar20 = [4, 5, 6, 7, 8, 9, 10];
btn20.onclick = fn20;

function fn20() {
  const out20 = document.querySelector(".out-20");
  let result = 0;

  for (const item of ar20) result += item;

  out20.textContent = result;
}
