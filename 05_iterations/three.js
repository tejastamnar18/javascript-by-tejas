// For Of Loop Example

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "hello, world";
// for (const greet of greetings) {
//   console.log(greet);
// }

//! Maps

const map = new Map()
map.set ('name', 'Tejas');
map.set ('age', 21);


//console.log(map);

for (const [key, value] of map) {
    console.log(key, `:-`, value);
}


const myObject = {
    'game1': 'Chess',
    'game2': 'Football',
    'game3': 'Cricket'
}
// for (const [key, value] of myObject)//

//     {
//     console.log(key, `:-`, value);
//     }


