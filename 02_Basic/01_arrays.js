//array

const myArr = [0 , 1 , 2 ,3 ,4 ,5]
const myHeros = ["shaktiman" , "spiderman"]

const myArr2 = new Array(1 , 2 , 3 , 4)

// console.log(myArr[1])

//Arrat methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  /*adding the value */
// myArr.shift()     /*remove the added value*/

// console.log(myArr.includes(9)) /*seraching for specific value in array*/
// console.log(myArr.indexOf(3)) /*give the index value */

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

//slice, splice

console.log("A" , myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B" , myArr)
const myn2 = myArr.splice(1, 3)
console.log("C" , myArr)
console.log(myn2)

/*In slice we give the two number that number will be print but last number is not print in splice avoiding the slice number remaining number comes in splice*/