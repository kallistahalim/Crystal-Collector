//Global Variables
var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * 30 + 1);
var yourScore = "";
var crystalImage = ["asset/img/gems.png", "asset/img/glamour.png", "asset/img/luxury.png", "asset/img/precious.png"];
var eachCrystal = Math.floor(Math.random() * 10);

//Crystal Option
for (var i = 0; i < crystalImage.length; i++) {
    $("#crystals").append("<button class=\"each-crystal\"><img src=\"" + crystalImage[i] + "\"/></button>");
}

//Crystal Value



//Initiate Game
function initiateGame() {

    targetScore = Math.floor(Math.random() * 30 + 1);
    $("#target-score").html(targetScore);

    yourScore = 0;
    $("#your-score").html(yourScore);

}

initiateGame();


$(".each-crystal").on("click", function() {

    eachCrystal = Math.floor(Math.random() * 10);
    yourScore = parseInt(yourScore) + parseInt(eachCrystal);
    $("#your-score").html(yourScore);

    if(yourScore === targetScore) {
        wins++;
        $("#wins").html(wins);
        initiateGame();
    } else if (yourScore > targetScore) {
        losses++;
        $("#losses").html(losses);
        initiateGame();
    }

});
