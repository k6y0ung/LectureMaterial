"use strict";

/*
  (구조) 분해 할당에 대해서 알아본다.
  배열의 분해 할당
  객체의 분해 할당
*/

/*
 * 배열의 분해 할당
 */
// ES5에서 분해할당 하는 방법
var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1); // 20, 30, 40
// ES2015에서 분해할당 하는 방법

var x2 = points[0],
    y2 = points[1],
    z2 = points[2];
console.log(x2, y2, z2); // 20, 30, 40
// 두번째  값 무시하기

var x3 = points[0],
    z3 = points[2]; // [20, 30, 40];

console.log(x3, z3); // 20 40
// 두번째, 세번째 값 무시하기

var x4 = points[0],
    w4 = points[3]; // [20, 30, 40];

console.log(x4, w4); // 20 undefined

/*
 * 객체의 분해 할당
 */

var car = {
  type: 't',
  color: 'S',
  model: 2021
}; // ES5 에서의 객체 분해 할당

var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1); // ES2015 에서의 객체 분해 할당

var type = car.type,
    color = car.color,
    model = car.model,
    gear = car.gear;
console.log(type, color, model, gear); // t S 2021 undefined
// ES2015

var type2 = car.type,
    color2 = car.color,
    model2 = car.model,
    gear2 = car.gear2;
console.log(type2, color2, model2, gear2); // t, s, 2021, undefined

debugger;

var func1 = function func1(_ref) {
  var type = _ref.type,
      color = _ref.color;
  console.log(type); //  ?

  console.log(color); //  ?
};

func1(car);

var func2 = function func2(car) {
  debugger;
  var type = car.type,
      color = car.color;
  console.log(type); //  ?

  console.log(color); //  ?
};

func2(car);