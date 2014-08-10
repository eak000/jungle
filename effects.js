$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).bind("click", function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
}; //thanks to Keven B on jquery forum

function night() {
   	$("#jungle").fadeOut("fast");
   	$("#eyes").fadeIn("slow", animate());
   	$("#time").text("Click to make it day")
 }; //night end

function day() {
	$("#jungle").fadeIn("slow");
	$("#eyes").fadeOut("fast");
	$("#time").text("Click to make it night")
}; // day end

function animate() {
	// $("#eyes1").fadeOut("fast").fadeIn(800);
	// $("#eyes2").fadeOut("slow").fadeIn("slow");
	// $("#eyes3").fadeOut("400").fadeIn(300);
	// $("#eyes4").fadeOut("fast").fadeIn(500);
	// $("#eyes5").fadeOut("slow").fadeIn(600);
	$("#eyes1").delay(200).animate({ opacity: 'toggle' }, 1300, function() { animate("#eyes1"); });
	$("#eyes2").delay(400).animate({ opacity: 'toggle' }, 800, function() { animate("#eyes2"); });
	$("#eyes3").delay(1100).animate({ opacity: 'toggle' }, 1250, function() { animate("#eyes3"); });
	$("#eyes4").delay(800).animate({ opacity: 'toggle' }, 1000, function() { animate("#eyes4"); });
	$("#eyes5").delay(200).animate({ opacity: 'toggle' }, 900, function() { animate("#eyes5"); });
};


$(document).ready(function() {
	
	$("#time").clicktoggle(night, day)

  }); //document ready end



