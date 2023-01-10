function animateButton(buttonColor) {  
    // animates the selected button                     
    $('#'+buttonColor).fadeOut(100).fadeIn(100);
}

function playAudio(color) {                                 
    // plays sound given the color of the button
    switch(color) {
        case "green":
            var audio = new Audio("/sounds/green.mp3"); 
            audio.play();
            break;
        case "blue":
            var audio = new Audio("/sounds/blue.mp3"); 
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("/sounds/yellow.mp3"); 
            audio.play();
            break;
        case "red":
            var audio = new Audio("/sounds/red.mp3");      
            audio.play();
            break;
    };
}

function nextSequence() {
    // generates a random number between 0 - 3
    let randomNumber = Math.floor(Math.random() * 4) 
    return randomNumber
};

userClickedPattern = []
gamePattern = []
buttonColours = ["red", "blue", "green", "yellow"];


var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour)




for(i = 0; i < buttonColours.length; i++) {             // checks for which button is clicked and sends it to the user click pattern array
    $("#"+buttonColours[i]).click(function() {
        var userChosenColour = this.id
        userClickedPattern.push(userChosenColour)
        playAudio(userChosenColour)

    })
}


