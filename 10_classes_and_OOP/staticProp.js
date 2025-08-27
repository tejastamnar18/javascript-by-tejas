class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username ${this.username}`);
        
    }
    static createId(){
        return`123`
    }


}
const tejas = new User('tejass')



class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const ipad = new Teacher('ipad','ipad@gamil.com')

console.log(ipad.logMe());
