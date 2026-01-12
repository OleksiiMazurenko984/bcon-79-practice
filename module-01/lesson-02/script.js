//1
const a = 7;
const b = 9;
console.log("🚀 ~ a * b:", a * b);

//2
const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
out2.innerHTML = c / d;

//3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
out3.innerHTML = e + f;

//4
const e1 = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
out4.innerHTML = e1 + f1;

//5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
out5.innerHTML = e2 / f2;

//6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
out6.innerHTML = e3 + f3;

//7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
out7.innerHTML = e4 * f4;

//8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
btn8.onclick = t8;

function t8() {
  out8.textContent = input8.value;
}

//9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = t9;

function t9() {
  out9.textContent = input9.value;
  input9.value = null;
}

//10
const btn10 = document.querySelector(".b-10");
const input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
btn10.onclick = t10;

function t10() {
  out10.textContent = input10.value * 20;
  input10.value = null;
}

//11
const btn11 = document.querySelector(".b-11");
const input11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");
btn11.onclick = t11;

function t11() {
  out11.textContent = input11.value + 55;
  input11.value = null;
}

//12
const btn12 = document.querySelector(".b-12");
btn12.onclick = t12;

function t12() {
  const input121 = document.querySelector(".i-12-1");
  const input122 = document.querySelector(".i-12-2");
  const out12 = document.querySelector(".out-12");

  out12.textContent = `Hello ${input121.value} ${input122.value}`;
}

//13
const btn13 = document.querySelector(".b-13");
btn13.onclick = t13;

function t13() {
  const a = document.querySelector(".i-13-1");
  const b = document.querySelector(".i-13-2");
  const out13 = document.querySelector(".out-13");
  out13.textContent = Number(a.value) * Number(b.value);
}

//14
const btn14 = document.querySelector(".b-14");
btn14.onclick = t14;

function t14() {
  const input14 = document.querySelector(".i-14");
  input14.value = "Go";
}

//15
const btn15 = document.querySelector(".b-15");
btn15.onclick = t15;

function t15() {
  const input15 = document.querySelector(".i-15");
  input15.style.border = "4px solid red";
}

//16
const btn16 = document.querySelector(".b-16");
btn16.onclick = t16;

function t16() {
  const input161 = document.querySelector(".i-16-1");
  const input162 = document.querySelector(".i-16-2");
  const out16 = document.querySelector(".out-16");
  out16.textContent = input161.value + input162.value;
}

//17
const btn17 = document.querySelector(".b-17");
btn17.onclick = t17;
function t17() {
  const input17 = document.querySelector(".i-17");
  const out171 = document.querySelector(".out-17-1");
  out171.innerHTML = Number(input17.value);
}

//18
const btn18 = document.querySelector(".b-18");
btn18.onclick = t18;

function t18() {
  const a = document.querySelector(".i-18");
  const out18 = document.querySelector(".out-18");
  out18.textContent = parseFloat(a.value);
}

//19
const btn19 = document.querySelector(".b-19");
btn19.onclick = t19;

function t19() {
  const input191 = document.querySelector(".i-19-1");
  const input192 = document.querySelector(".i-19-2");
  const out19 = document.querySelector(".out-19");

  out19.textContent = Number(input191.value) + Number(input192.value);
}

//20
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");
let clickCounter = null;
btn20.onclick = t20;

function t20() {
  clickCounter += 1;
  out20.textContent = clickCounter;
}
