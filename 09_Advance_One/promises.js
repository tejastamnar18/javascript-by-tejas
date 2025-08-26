const promiseOne = new Promise(function(resolve, reject){
    // do an asnyc task
    ///DB calls ,cryptoGrapghy, network
    setTimeout(function(){
        console.log("Asnyc task  is Complete");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})


new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('Asnyc Task 2');
        resolve()
        },1000)
}).then(function(){
    console.log("asnyc 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "tejas", email: "tejas@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username : "tejas", password: "123"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("promise resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username : "javascript", password: "123"})
        }else{
            reject('ERROR: js Went Wrong')
        }
    },1000)
}) 

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
          
    }
    
}
consumePromiseFive();