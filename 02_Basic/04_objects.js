// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123fgh",
tinderUser.name = "sam",
tinderUser.isLoggedIN = false

// console.log(tinderUser)

const instagram = {
    id :"sakshi__.s",

    post: {
        total_post : 20,
        follower : 320,
        follwing: 234
    }

}
// console.log(instagram.post.follower)

const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3 : "c" , 4 : "d" }

// const obj3 = {obj1 , obj2}
// const obj4 = {obj2 , obj1}
// const obj5 = obj1 + obj2 


  //in below syntax is {}is the target and obj1,obj2,obj3 is source to add all source into the target


// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}

// console.log(obj3)
// console.log(obj4)
// console.log(obj5)

const users = [
    {
        id :1,
        email: "s@gmail.com"
    },
    {
        id :1,
        email: "s@gmail.com"
    },{
        id :1,
        email: "s@gmail.com"
    },
    
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIN'))  //give the answer in boolean.