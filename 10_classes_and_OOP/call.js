function SetUserName(username){
    this.username = username
}
function createUser(username, email, password){
    SetUserName.call(this ,username)

    this.email = email
    this.password = password
}

const tejas = new createUser('tejas','tejas@gmail.com','123')

console.log(tejas);
