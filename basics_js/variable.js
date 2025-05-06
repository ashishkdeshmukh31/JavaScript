const accountId=111222
var accountEmailId="Ash@gmail.com"
let accountPassword="9999"
accountCity="Satara"

console.log("Before: ")
console.table([accountId,accountEmailId,accountPassword,accountCity])

// accountId=333444   //not allowed to change the constant value
accountEmailId="Ani@gmail.com"
accountPassword="8888"
accountCity="Karad"

console.log("After: ")
console.table([accountId,accountEmailId,accountPassword,accountCity])