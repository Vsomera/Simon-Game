userClickedPattern = []


gamePattern = []
buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4) 
    return randomNumber
};

var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour)

$('#'+randomChosenColour).fadeOut(100).fadeIn(100);

for(i = 0; i < buttonColours.length; i++) {             // checks for which button is clicked
    $("#"+buttonColours[i]).click(function() {
        var userChosenColour = this.id
        userClickedPattern.push(userChosenColour)
        playAudio(this.id)
    })
}




function playAudio(color) {
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
            var audio = new Audio("/sounds/red.mp3"); // buffers automatically when created
            audio.play();
            break;
    }
}