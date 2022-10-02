/*
  (구조) 분해 할당에 대해서 알아본다.
  배열의 분해 할당
  객체의 분해 할당
*/

/*
 * 배열의 분해 할당
 */
// ES5에서 분해할당 하는 방법
const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];
console.log(x1, y1, z1); // 20, 30, 40

// ES2015에서 분해할당 하는 방법
const [x2, y2, z2] = points;
console.log(x2, y2, z2); // 20, 30, 40

// 두번째  값 무시하기
const [x3, , z3] = points; // [20, 30, 40];
console.log(x3, z3); // 20 40

// 두번째, 세번째 값 무시하기
const [x4, , , w4] = points; // [20, 30, 40];
console.log(x4, w4); // 20 undefined

/*
 * 객체의 분해 할당
 */
const car = {
  type: 't',
  color: 'S',
  model: 2021,
};
// ES5 에서의 객체 분해 할당
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

// ES2015 에서의 객체 분해 할당
const { type, color, model, gear } = car;
console.log(type, color, model, gear); // t S 2021 undefined

// ES2015
const { type: type2, color: color2, model: model2, gear2 } = car;
console.log(type2, color2, model2, gear2); // t, s, 2021, undefined

debugger;
const func1 = ({ type, color }) => {
  console.log(type); //  ?
  console.log(color); //  ?
};
func1(car);

const func2 = function (car) {
  debugger;
  const { type, color } = car;
  console.log(type); //  ?
  console.log(color); //  ?
};
func2(car);
