function mulyiplyBy5(num){
    return num*5
}
mulyiplyBy5.power=2;


console.log(mulyiplyBy5(5));
console.log(mulyiplyBy5.power);
console.log(mulyiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const tea = new createUser("tea",250)
const chai = new createUser("chai",25)


chai.printMe()
tea.printMe()