 
function newRandom () {    
    var random = Math.ceil(Math.random()*4);
    if (random === 1){
        correctArray.push(1)
        clickGreen();
    } else if (random === 2){
        correctArray.push(2)
        clickRed();
    } else if (random === 3){
        correctArray.push(3);
        clickBlue();
    } else {
        correctArray.push(4);
        clickYellow();
    }
    console.log(correctArray);
}

function silentRandom(){
    var random = Math.ceil(Math.random()*4);
    if (random === 1){
        correctArray.push(1)
    } else if (random === 2){
        correctArray.push(2)
    } else if (random === 3){
        correctArray.push(3);
    } else {
        correctArray.push(4);
    }
    console.log(correctArray);
}

var correctArray = [];
function start () {
    newRandom()
}

function cpTurn(){
    silentRandom(); 
    var i = 0;
    function myLoop(){
        setTimeout(function(){
            if (correctArray[i] === 1){
                clickGreen();
            } else if (correctArray[i] === 2){
                clickRed();
            } else if (correctArray[i] === 3){
                clickBlue();
            } else {
                clickYellow();
            }  
            console.log('ran ' + i + ' times');
            i++;
            if(i < correctArray.length){
                myLoop();
            } else if (i === correctArray.length){
                console.log('playerTurn')
                playerTurn()
            }
        }, 1000)
    }
    myLoop();
}

function playerTurn() {
    index = 0;
    playerArray = [];  
}
var index = 0;
var playerArray = [];
   
$("#green").click(function(){
    clickGreen()
    playerArray.push(1)
    checkArrays()
    index++;
    console.log(playerArray)
})
$("#red").click(function(){
    clickRed()
    playerArray.push(2)
    checkArrays()
    index++;
    console.log(playerArray)
})    
$("#blue").click(function(){
    clickBlue()
    playerArray.push(3)
    checkArrays()
    index++;
    console.log(playerArray)
})    
$("#yellow").click(function(){
    clickYellow()
    playerArray.push(4)
    checkArrays()
    index++;
    console.log(playerArray)
})
        
function checkArrays(){
    if (playerArray[index] !== correctArray[index]){
        gameOver()
    } else if(playerArray.length === correctArray.length){
        cpTurn()
        changeScore()
        console.log('cpTurn')
    } 
}

function gameOver(){
    window.location = "https://i.imgur.com/1HWQIPa.gif";
}

function changeScore(){
    $('#score').empty();
    $('#score').append('Score: ' + (correctArray.length - 1) );
}