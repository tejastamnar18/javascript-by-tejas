const accountID =13486
let accountEmail = "tejas@gmail.com"
var accountPassword = "tejas123"
accountCity = "Mumbai"


// accountID = 2 not allowed

console.log(accountID)
accountEmail = "te@gamil.com"
console.log(accountEmail)
accountPassword = "tejas456"
console.log(accountPassword)
accountCity = "Pune"
console.log(accountCity)


console.table({
    accountID: accountID,
    accountEmail: accountEmail,
    accountPassword: accountPassword,
    accountCity: accountCity
})
// console.log(accountID) // This will throw an error if uncommented, as accountID is a constant and cannot be reassigned.
console.log("End of variable.js file.")