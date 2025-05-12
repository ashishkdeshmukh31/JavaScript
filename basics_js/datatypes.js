// let na="Ashish"
// let age=20
// let s=null
// let u;
// console.log(typeof na)
// console.log(na,age,s,u)
// console.log(typeof s)  // object is the datatype for the null not for undefined
// console.log(typeof u)  //undefined

// to convert in another datatypes
// let n1="122"  //as a string
// console.log("Datatype Before:",typeof n1)
// let n2=Number(n1)
// console.log("Datatype After:",typeof n2)

// let isCheck=""  //not even space
// let convert=Boolean(isCheck)
// console.log(convert)

/*  
"33"=>33
"33abc"=>NaN
true=>1;  false=>0
1=>true; 0=>false
" "=>(space)true;     ""=>false;    "ash"=>true
*/
// let str=33  //number
// let s1=String(str)
// console.log(typeof s1)

console.log("2"==2)   // true it check only value
console.log("2"===2)  // false  it check value as well as datatype

let id=Symbol('123')
let anotherId=Symbol('123')

console.log(id===anotherId)

//Non primitve

const arr=["Ash","Ani","AK"]
console.log(arr.length,arr[0],arr[2])

let myObject={
    name:"Ashish",
    roll_no:57,
}

console.log(myObject.name)

const myFun=function(){
    console.log("Hello Ashish....")
}

myFun()


//null returns the object 
//undefined return undefined
//all return their types like boolean to boolean , number to number, string to string
