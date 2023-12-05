let myName = "Sakshi"
let mySurename = "Shinde"

// console.log(myName + mySurename)
// console.log("Hello" + myName + mySurename)

// console.log(`Hello my name is ${myName} and my surename is ${mySurename}`)

const gameName = new String("saks-hi-hc")

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,5)
// console.log(newString)

const anotherString = gameName.slice(-8 , 4)
// console.log(anotherString)

const newStringOne = "  Sakshi   "
// console.log(newStringOne)
// console.log(newStringOne.trim())  //for whitespace

const url = "https://sasksh.com/sakshi%33saksh"

// console.log (url.replace('%33', '-'))
// console.log(url.includes('sundar'))

console.log(gameName.split('-'))