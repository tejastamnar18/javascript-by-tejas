class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new cousre add was ${this.username}`);
        
    }
}

const tejas = new Teacher('tejas','tejas@gmail.com','123456')

tejas.addCourse()

const tejast = new User ("tejast")

tejast.logMe()
console.log(tejas instanceof User);
