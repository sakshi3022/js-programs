// Primitive 


// 7 types : String, Number , Boolean ,Null ,Undefined , Symbol, BigInt 

const score = 33
const scoreValue = 100.5
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 34563473754685n

// non Primitive (refernce) 

// Array, objects, function 

/* Array example */
const heros = ["shaktiman","naagraj","doga"];

/*obj example */
let myObj ={
    name: "sakshi",
    age : 20
}

/* function example */
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)