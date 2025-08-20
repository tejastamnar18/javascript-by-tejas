//! if Statement

// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log("User is logged in");
// }


// const balance = 568;

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("Balance is less than 500");
// }
// else if (balance < 750){
//     console.log("Balance is less than 750");
// }
// else {
//     console.log("less than 1000");
// }

const isUserLoggedIn = true;
const debitCrad = true;
const LoggedInFromGoogle = false;
const LoggedInFromMobile = true;

if (isUserLoggedIn && debitCrad && 2==2) {
    console.log("Allow to buy Course");
}
else if(LoggedInFromGoogle || LoggedInFromMobile) {
    console.log("Allow to buy Course from Google or Mobile");
}
else {
    console.log("Not allowed to buy Course");
}




