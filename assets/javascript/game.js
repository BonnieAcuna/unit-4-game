var numbers = 4;
var winsNumber = 0;
var lossNumber = 0;
var numbersGuessed = [];
var counter = 0;
var pandaClicked = 0;
var tigerClicked = 0;
var unicornClicked = 0;
var dogClicked = 0;
var randomNumber;
var playerClicked = 0;

//lowest value acheivable is equal to lowValue
//Highest value achievable is highValue - 1 + lowValue

function generateRandomNumber(lowValue, highValue) {
    return Math.floor(Math.random() * highValue + lowValue);
}
// The 4 numbers shown here when the animal is pressed

function displayChosenNumbers(){
     $("#numbers").text(counter);
}




$(document).ready(function() {

// Restart Game

var restartGame = function () {
    
    randomNumber = generateRandomNumber(19, 120)
    counter = 0;
    $(".dog-image").attr("data-dogvalue", generateRandomNumber(1,12));
    $(".tiger-image").attr("data-tigervalue", generateRandomNumber(1,12));
    $(".panda-image").attr("data-pandavalue", generateRandomNumber(1,12));
    $(".unicorn-image").attr("data-unicornvalue", generateRandomNumber(1,12));
    displayChosenNumbers();
    $("#random-number").text(randomNumber);
    


}
   
//Random number generator button

    $("#random-button").on("click", function() {
        var random = generateRandomNumber(19, 120);
        randomNumber = random
        $("#random-number").text(random);
        playerClicked++
        


// 4 different animals that generate a random number when pressed.

    if(playerClicked <= 0) {
        return;
    } else {
        if(playerClicked == 1) {
            var imageDog = $("<img>"); 
            imageDog.addClass("dog-image");
            imageDog.addClass("animal-image");
            imageDog.attr("src", "assets/images/Picturedog.png");
            imageDog.attr("data-dogvalue", generateRandomNumber(1,12));
            $("#animals").append(imageDog);
    
            var imageUnicorn = $("<img>"); 
            imageUnicorn.addClass("unicorn-image");
            imageUnicorn.addClass("animal-image");
            imageUnicorn.attr("src", "assets/images/Pictureunicorn.png");
            imageUnicorn.attr("data-unicornvalue", generateRandomNumber(1,12));
            $("#animals").append(imageUnicorn);
    
            var imageTiger = $("<img>"); 
            imageTiger.addClass("tiger-image");
            imageTiger.addClass("animal-image");
            imageTiger.attr("src", "assets/images/Picturetiger.png");
            imageTiger.attr("data-tigervalue", generateRandomNumber(1,12));
            $("#animals").append(imageTiger);
    
            var imagePanda = $("<img>"); 
            imagePanda.addClass("panda-image");
            imagePanda.addClass("animal-image");
            imagePanda.attr("src", "assets/images/Picturepanda.png");
            imagePanda.attr("data-pandavalue", generateRandomNumber(1,12));
            $("#animals").append(imagePanda);

        }

    }
});
    
     $(document).on("click",".dog-image", function() {
        var dogValue = ($(this).attr("data-dogvalue"));
        dogValue = parseInt(dogValue);
        counter += dogValue;
        if (dogClicked < 1){
            numbersGuessed.push(dogValue);
            dogClicked++
        }
        numbersGuessed.push(dogValue);
        displayChosenNumbers();
        endOfGame();
    });

    $(document).on("click", ".unicorn-image", function() {
        var unicornValue = ($(this).attr("data-unicornvalue"));
        unicornValue = parseInt(unicornValue);
        counter += unicornValue;
        if (unicornClicked < 1){
            numbersGuessed.push(unicornValue);
            unicornClicked++
        }
        numbersGuessed.push(unicornValue);
        displayChosenNumbers();
        console.log(counter);
        endOfGame();
    });

        
    
    $(document).on("click",".tiger-image", function() {
        var tigerValue = ($(this).attr("data-tigervalue"));
        tigerValue = parseInt(tigerValue);
        counter += tigerValue;
        if (tigerClicked < 1){
            numbersGuessed.push(tigerValue);
            tigerClicked++
        }
        numbersGuessed.push(tigerValue);
        displayChosenNumbers();
        endOfGame();

    });

    
    $(document).on("click", ".panda-image", function() {
        var pandaValue = ($(this).attr("data-pandavalue"));
        pandaValue = parseInt(pandaValue);
        counter += pandaValue;
        if (pandaClicked < 1){
            numbersGuessed.push(pandaValue);
            pandaClicked++
        }
        numbersGuessed.push(pandaValue);
        displayChosenNumbers();
        endOfGame();
    });

    
    


function endOfGame () {


    //If the combined 4 numbers equal the random number generated than the player wins
    if (counter === randomNumber) {
        winsNumber++;
        alert("You Won!");
        $("#wins").text("Wins: " + winsNumber);
        restartGame();
    }

    // If the 4 numbers do not equal to random number generate the player loses
    else if (counter > randomNumber) {
        lossNumber++;
        alert("You Lose");
        $("#losses").text("Losses: " + lossNumber);
        restartGame();
    }

}

});



