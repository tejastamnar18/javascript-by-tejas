//ES6

class user {
    constructor (username, email, password){
        this.username = username
        this.email = email 
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const tejas = new user ('tejas', 'tejas@gmail.com', '123')

console.log(tejas.encryptPassword());
console.log(tejas.changeUsername());


//behind the Scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
        return `${this.password}abc`
    
}
User.prototype.changeUsername = function(){
        return`${this.username.toUpperCase()}`

}

const tea = new User("tea",`tejas@gamil.com`,'12345')

console.log(tea.changeUsername());
console.log(tea.encryptPassword());

