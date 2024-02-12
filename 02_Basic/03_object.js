//singletone

//object literals
/*symbole is imp for interviwe purpose*/
const mySym = Symbol("key1")
const JsUser = {
    name:"sakshi",
    "full name" :"sakshi shinde",
    [mySym] :"myKey1",
    age: 20,
    location:"satara",
    email:"sakshi@gmail.com",
    isloggedIn : false,
    lastLogInDays:["Monday" ,"Sunday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) /*if we can declare the object in double cout then access if throw the 2nd method*/
// console.log(JsUser[mySym])

JsUser.email ="sakshiiigoogle.com"
// Object.freeze(JsUser); /*It is used for fixing the value */
JsUser.email = "sakshiiichatgpt.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user")
}
JsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())