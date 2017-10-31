//Rules of the Game panel
$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
});

//allows the html to full load before running the js
$(document).ready(function() {
     
//setting the variables needed for the game
var wins = 0;
var losses = 0;
//so a new magicNumber is generated each game at random
var magicNumber = Math.floor(Math.random() * 101) + 19;

//sends the magicNumber in the magicNumber ID 
$("#magicNumber").text(magicNumber);

// so the crystals generate a new random value each game
var redCrystal = Math.floor(Math.random() * 11) + 1;
var blueCrystal = Math.floor(Math.random() * 11) + 1;
var greenCrystal = Math.floor(Math.random() * 11) + 1;
var purpleCrystal = Math.floor(Math.random() * 11) + 1;

//printing wins and losses to the html
$("#wins").html(wins);
$("#losses").html(losses);

//creating a variable for the total you have accumulated
var total = 0;
$("#total").text(total);

//setting the reset function for the game
function reset () {
    magicNumber = Math.floor(Math.random() * 101) + 19;
    $("#magicNumber").text(magicNumber);
    redCrystal = Math.floor(Math.random() * 11) + 1;
    blueCrystal = Math.floor(Math.random() * 11) + 1;
    greenCrystal = Math.floor(Math.random() * 11) + 1;
    purpleCrystal = Math.floor(Math.random() * 11) + 1;
    total = 0;
    $("#total").text(total);
}

function win() {
    alert("WINNER!");
    wins ++;
    $("#wins").text(wins);
    reset();
}

function lose() {
    alert("LOSER!");
    losses++;
    $("#losses").text(losses);
    reset();
}

//applying click functions to the jewels
//applying if statements
$("#redCrystal").on("click", function() {

    total = total + redCrystal;

    $("#total").text(total);

        if (total === magicNumber) {
            win();
        }
        else if (total > magicNumber) {
            lose();
        }
});

$("#blueCrystal").on("click", function() {
    
        total = total + blueCrystal;
    
        $("#total").text(total);
    
            if (total === magicNumber) {
                win();
            }
            else if (total > magicNumber) {
                lose();
            }
});

$("#greenCrystal").on("click", function() {
        
        total = total + greenCrystal;
        
        $("#total").text(total);
        
            if (total === magicNumber) {
                win();
            }
            else if (total > magicNumber) {
                lose();
            }
});

$("#purpleCrystal").on("click", function() {
            
        total = total + purpleCrystal;
            
        $("#total").text(total);
            
            if (total === magicNumber) {
                win();
            }
            else if (total > magicNumber) {
                lose();
            }
});

});
