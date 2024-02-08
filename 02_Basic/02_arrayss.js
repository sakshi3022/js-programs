const cartoon =["shinchan" , "doremone","nobita"]
const colour =["red","pink","yellow"]

/*push can add the second array imto the first string*/

// cartoon.push(colour)
// console.log(cartoon)

/*concat marge the two arrays into the new array*/
// const mixup = cartoon.concat(colour)
// console.log(mixup)

/*this is spread function when we have more than 2 array list then we use this method*/
// const three = [...cartoon,...colour]
// console.log(three)

/*combine the array*/
const another_array = [1,2,3,[6,8],4,6,[6,3,[5,4]]]

const real_array = another_array.flat(Infinity)
// console.log(real_array)

/*creating array*/
console.log(Array.isArray("sakshi"))
console.log(Array.from("sakshi"))
console.log(Array.from({name:"sakshi"})) //interesting



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 ,score3))