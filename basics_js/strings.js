//for primitive datatypes it uses stack (it passes as a copy)
//for non primitive datatypes it uses heap (it passes the reference)

let s="Ashish"
console.log(s.charAt(3))  //it gives the letter on that perticular location
console.log(s.indexOf('A'))  //it gives the index for that particular letter
console.log(s.substring(0,3))  //it gives the part of the word
console.log(s.slice(-3))  // we can print the reverse it takes -ve value as parameter

let str="  Tejas   "
console.log(str)
console.log(str.trim())

const t="Ashish-Krishnat-Deshmukh"
console.log(t.split('-'))

console.log(`My name is ${s} and my brother name is ${str}`)