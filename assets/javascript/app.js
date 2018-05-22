/* *******************GLOBAL VARIABLES *********************/
		//	Create object with questions and possible answers
        var questionsObj = {
            "What is the first element on the periodic table?" : ["Beryllium", "Oxygen", "Helium", "Hydrogen"],
            "How many time zones are there in the world?" : ["24", "25", "26", "27"],
            "Which planet has the most moons?" : [ "Earth", "Saturn",  "Jupiter","Mercury"],
            "Which bone is the longest bone in the human body?" : [ "Tibia", "Femur","Fibula", "Humerus"],
            "Diamonds are made of almost entirely of what element?" : [ "Nitrogen", "Boron","Carbon", "Hydrogen"],
            "What is the largest internal organ of the human body?" : ["Liver", "Heart", "Skin", "Lungs"],
            "In what month is the Earth closest to the Sun" : ["January", "February", "March", "April"],
            "Which of the following choices describes 'pogonophobia'?" : [ "Fear of comic strips", "Fear of high jumping","Fear of beards", "Fear of the band 'The Pogues'"],
            "Whats the world's largest ocean?" : [ "Atlantic Ocean", "Indian Ocean", "Arctic Ocean","Pacific Ocean"],
            "How many breaths does the average human take in a day?" : ["23,000", "26,000", "29,000", "32,000"],
            "Which is the rarest blood type in humans?" : ["AB-", "AB+", "A+", "A-"],
        };
		// Array with all correct answers
		var correctObj = [ 
		"Hydrogen",
		"24",
		"Jupiter",
		"Femur",
		"Carbon",
		"Liver",
		"February",
		"Fear of beards",
		"Pacific Ocean",
		"23,000",
		"AB-"];
		
    //	Create right_counter
    var right_counter = 0;
    //	Create wrong_counter
    var wrong_counter = 0;
	// create counter of unanswered questions
	var unanswered = 0;
    // 	Create count_down_timer 
    var count_down_timer = 20 ;
    // Create interval_id
    var interval_id;
    
    /* *******************FUNCTIONS *********************/

    //Function to display trivia questions after user has clicked the start button
    var StartQuestions = function () {
        //Reset timer
        reset();
        //Hide button once trivia starts
        $("#start").hide();
        
        //Display timer
        interval_id = setInterval(decrement, 1000);
                    
        //Get div where questions will be displayed
        var questionsDiv = $(".questions");
        //Assign question#
        var question_counter=1; 
        for (var key in questionsObj) {
            //Creating questions tag for each attribute in questionsObj
            var question_name = "question" +question_counter;
            //console.log(question_name);
            questionsDiv.append("<h2 " + "name= '"+question_name+"'>"+ key+"</h2>");
            //Creating radio buttons for each value corresponding to each attribute in questionsObj
            
            for (var x in questionsObj[key]) {
                //console.log(questionsObj[key][x]);
                var choices = '<input type="radio" autocomplete="off" value ="'+questionsObj[key][x]+'"'+ 'class= "question'+question_counter+ '"'+ 'name = "answer_'+ question_counter + '"> ' +questionsObj[key][x]+"<br>";
                
                questionsDiv.append(choices);
            }
            question_counter++;
        }
        
        //Creating submit button tag
        var submit_tag = $(".submit");
        submit_tag.append("<button id='submit' type='button' class='btn btn-primary btn-lg'>Submit</button>")
        $("#submit").show();
		
		$("#submit").on("click", Submit);
    }
    
    
    var decrement = function () {
      count_down_timer --;
      var timer = $(".timer")
        timer.html("<p> Time remaining: "+count_down_timer +"</p>");
      if (count_down_timer === 0) { 
       Submit();
        reset();
      }
    }
    
	//Function to clear interval
    var reset = function () {
        clearInterval(interval_id);
    }
	
	//Function to see what happens when user clicks on Submit Button or when time's up
    var Submit = function () {
		
		console.log ("Submit button has been clicked");
		
		//Check if user has selected the correct option for each question
			
			$('input[type=radio]:checked').each (function () {
				if (correctObj.includes (this.value)) {
					right_counter++;
				}
				else {
					wrong_counter++;
				}
			});	
			
			//check how many questions were unanswered
			for (var i=1; i<=11; i++) {
				var class_name = "class= 'question"+i+"'";
				console.log($('input['+class_name+']:checked').length>0 );
				if ($('input['+class_name+']:checked').length==0 ) {
					unanswered++;
				}
			}
		
		emptyDivs();
		$("#submit").hide();
		reset();
		//display results
		$(".questions").append("Right answers: "+right_counter+ "<br>"+ "  Wrong answers: "+wrong_counter + "<br>"+ " Unanswered questions: " + unanswered)
		
		
    };
	
	//Function to empty questions divs to display results
	var emptyDivs = function () {
		
		$(".questions").empty();
		
	}
    
    
    /* *******************CALLS *********************/
    $("#start").on("click", StartQuestions);

        
    
