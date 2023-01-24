let level = 0

let userClickedPattern = []
var gamePattern = []
const buttonColours = ["red", "yellow", "blue", "green"]

function wrongAnswer() {
    $("h1").text("wrong answer")
}

/********** Constantly checks if the user clicked pattern and the game pattern matches through out the game *************/
function checkAnswer() {
    if ((userClickedPattern == gamePattern)) {
        level ++
        userClickedPattern = []
        setTimeout(function() {
            nextSequence()
            }, 1000)
    }
    else {
        wrongAnswer()
    }
}

/*********   Plays sound given the color of the button   *************/
function playAudio(color) {                                 
        var audio = new Audio("/sounds/"+ color +".mp3"); 
        audio.play();
};

/**********  Generates new sequence of colours when a user presses a button ****************/
function nextSequence() {
    $("h1").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4)
    var randomColour = buttonColours[randomNumber]

    gamePattern.push(randomColour)
    playAudio(randomColour)
    $("#"+randomColour).fadeOut(100).fadeIn(100);

}


/*********   Checks when a button is pressed (Collects user answer)  *************/
for (let x in $(".btn")) {
    $("#"+buttonColours[x]).click(function() {
        var userChosenColour = this.id
        playAudio(userChosenColour)
        userClickedPattern.push(userChosenColour)

        $("#"+userChosenColour).addClass("pressed")
            setTimeout(function() {
                $("#"+userChosenColour).removeClass("pressed")}, 100)
    
    

    if (userClickedPattern.length == gamePattern.length) {
        checkAnswer()}
    })
}



// for(i = 0; i < buttonColours.length; i++) {             // checks for which button is clicked and sends it to the user click pattern array
//     $("#"+buttonColours[i]).click(function() {
//         var userChosenColour = this.id
//         userClickedPattern.push(userChosenColour)

//         playAudio(userChosenColour)                     // plays audio and animates buttons when clicked
//         $("#"+userChosenColour).addClass("pressed")
//         setTimeout(function() {
//             $("#"+userChosenColour).removeClass("pressed")
//         }, 100)
//     });
// };




// function animateButton(buttonColor) {  
//     // animates the selected button                     
//     $('#'+buttonColor).fadeOut(100).fadeIn(100);
// }

// function animatePattern(buttonColor) {
//     // animates the game pattern
//     $("#"+buttonColor).fadeOut(100).fadeIn(100);
// }



// function nextSequence() {
//     // generates a random number between 0 - 3
//     let randomNumber = Math.floor(Math.random() * 4) 
//     return randomNumber
// };

// function checkAnswer(currentLevel) {
//     // function will check if user input matches game pattern
//     if (currentLevel[currentLevel.length - 1] == gamePattern[gamePattern.length - 1]) {
//         console.log("success")
//         setTimeout(function() {
//             gamePattern.push(buttonColours[nextSequence()])
//         })
//     } 
//     else {
//         console.log("wrong")
//     }
// }

// userClickedPattern = [];
// gamePattern = [];
// buttonColours = ["red", "blue", "green", "yellow"];

// for(i = 0; i < buttonColours.length; i++) {             // checks for which button is clicked and sends it to the user click pattern array
//     $("#"+buttonColours[i]).click(function() {
//         var userChosenColour = this.id
//         userClickedPattern.push(userChosenColour)

//         checkAnswer(userClickedPattern)


//         playAudio(userChosenColour)                     // plays audio and animates buttons when clicked
//         $("#"+userChosenColour).addClass("pressed")
//         setTimeout(function() {
//             $("#"+userChosenColour).removeClass("pressed")
//         }, 100)
//     });
// };


// var randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// animatePattern(randomChosenColour)




  


