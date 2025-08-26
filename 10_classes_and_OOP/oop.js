const user = {
    username : 'tejas',
    LogInCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log(`Got user details from database`);
        // console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());


function User(username, logInCount, isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn
    this.greet = function(){
        // console.log(`Welcome${this.username}`);
        
    }
    return this
}
const userOne = User ("Tejas" ,12 , true)
const userTwo = User ("Chai" ,24 , false)

// console.log(userOne);
console.log(userTwo.constructor);