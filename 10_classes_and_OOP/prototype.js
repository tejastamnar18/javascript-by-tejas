
let myHeros = ["thor", 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman :'sling',

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}
Object.prototype.tejas = function(){
    console.log(`tejas is Present in all Objects`);
    
}

Array.prototype.heyTejas = function(){
    console.log("Tejas Says Helloo");
    
}

heroPower.tejas()
myHeros.tejas()
// heroPower.heyTejas()//!error
myHeros.heyTejas()

const User = {
    name :"tejas",
    email:"tejas@gmail.com"
}

const Player ={
    playGame : true
}
const GameSupport ={
    isAvailable: true
}
const TASupport={
    makeAssignment:"Play Assignment",
    fullTime:true,
    __proto__: GameSupport
}
Player.__proto__ = User

//modern Syntax

Object.setPrototypeOf(GameSupport, Player)

let anotherUsername ='tejas         '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);

}
anotherUsername.trueLength()

"tejast".trueLength()
"icetea".trueLength()