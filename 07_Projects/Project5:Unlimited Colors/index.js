//generate a random color
const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6;i++){
        color += hex[Math.round(Math.random()*16)]
    }
    return color;
}

// console.log(Math.round(Math.random()*16));

let intervalId;
const startChaningColor = function(){
    if(!intervalId){
    intervalId = setInterval(changebgColor, 1000)
    }

    function changebgColor(){
    document.body.style.backgroundColor = randomcolor();
    }
};

const stopChaningColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}


document.getElementById('start').addEventListener('click', startChaningColor)

document.getElementById('stop').addEventListener('click', stopChaningColor)

    
