//***********task 1 ********* */
const myArr = [1, 2, 3, 4, 5]
// console.log(myArr);

//**********task 2*********** */
// console.log(myArr[0]);
// console.log(myArr[(myArr.length)-1]);

//**********task 3 ************ */
// console.log(myArr.push(8));

//***********task 4 ******** */
// myArr.pop()
// console.log(myArr);

//**********task 5************* */

// myArr.shift()
// console.log(myArr);

//*********task 6 ************** */
// myArr.unshift(9)
// console.log(myArr);

//***************task 7 ************* */

// const doubleNum = myArr.map(num => num * 2 );
// console.log(doubleNum);

//*************task 8 ************* */

// const evenNum = myArr.filter(num => num % 2 == 0);
// console.log(evenNum);

//************Task 9 ************ */

const initialValue = 0;
const sumWithInitial = myArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
