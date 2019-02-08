let randomResult
let wins = 0;
let losses = 0;
let counter = 0;

let startGame = function() {
    $(".crystals").empty();

    let images = ["https://images-na.ssl-images-amazon.com/images/I/61DzstO1hJL._SY355_.jpg", "https://images-na.ssl-images-amazon.com/images/I/6171vUCgyUL._SY355_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61vsddlz1IL._SY355_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61Ls5sXOvnL._SY355_.jpg"];

// randomResult contains a randomly generated number. And that number is put into the html through the #randomResult and displays Random Result: + the randomly generated number

    randomResult = Math.floor(Math.random() * (120 -19) + 19)
    console.log(randomResult)
    $("#randomResult").html("Random Result: " + randomResult);
    
// this creates 4 divs for the crystals and generates a random number for each crystal div and then assigns that number through the data-random
    for(let i =0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 12) + 1;
        console.log(randomNumber)

        let crystal = $("<div>"); 
            crystal.attr( {
                "class": "crystal",
                "data-random": randomNumber
            });
            crystal.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size":"cover"
            });


        $(".crystals").append(crystal);
    }

    $("#scoreBox").html(counter);
}

startGame();


// this will take the value of the data-random and store it on click. and then pass the number into num and that num is added in the counter
$(document).on("click", ".crystal", function(){
    console.log($(this).attr("data-random"));

    // var num =($(this).attr("data-random"));
// this turns string into a number
    var num = parseInt($(this).attr("data-random"));

    counter += num;
    console.log(counter);

    $("#scoreBox").html(counter);

    if(counter > randomResult) {
        losses++;

        $("#losses").html(losses);

        counter = 0;

        startGame();

    } else if (counter === randomResult) {
        wins++;

        $("#wins").html(wins);

        counter = 0;

        startGame();
    }

    
});