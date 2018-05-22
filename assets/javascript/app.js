/* *******************GLOBAL VARIABLES *********************/
		//	Create object with questions and possible answers
        var questionsObj = {
            "What is the first element on the periodic table?" : ["Hydrogen", "Beryllium", "Oxygen", "Helium"],
            "How many time zones are there in the world?" : ["24", "25", "26", "27"],
            "Which planet has the most moons?" : ["Jupiter", "Earth", "Saturn", "Mercury"],
            "Which bone is the longest bone in the human body?" : ["Femur", "Tibia", "Fibula", "Humerus"],
            "Diamonds are made of almost entirely of what element?" : ["Carbon", "Nitrogen", "Boron", "Hydrogen"],
            "What is the largest internal organ of the human body?" : ["Liver", "Heart", "Skin", "Lungs"],
            "In what month is the Earth closest to the Sun" : ["January", "February", "March", "April"],
            "Which of the following choices describes 'pogonophobia'?" : ["Fear of beards", "Fear of comic strips", "Fear of high jumping", "Fear of the band 'The Pogues'"],
            "Whats the world's largest ocean?" : ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            "How many breaths does the average human take in a day?" : ["23,000", "26,000", "29,000", "32,000"],
            "Which is the rarest blood type in humans?" : ["AB-", "AB+", "A+", "A-"],
        };
        
        
    //	Create right_counter
    var right_counter = 0;
    //	Create wrong_counter
    var wrong_counter = 0;
    // 	Create count_down_timer 
    var count_down_timer = 100 ;
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
                var choices = '<input type="radio" autocomplete="off" value ="'+questionsObj[key][x]+'"'+ 'class= "question'+question_counter+ '"'+ 'name = "answer_'+ x + '"> ' +questionsObj[key][x]+"<br>";
                
                questionsDiv.append(choices);
            }
            question_counter++;
        }
        
        //Creating submit button tag
        var submit_tag = $(".submit");
        submit_tag.append("<button id='submit' type='button' class='btn btn-primary btn-lg'>Submit</button>")
        $("#submit").show();
    }
    
    
    var decrement = function () {
      count_down_timer --;
      var timer = $(".timer")
        timer.html("<p> Time remaining: "+count_down_timer +"</p>");
      if (count_down_timer === 0) {
        submit();
        reset();
        //Results should go here
      }
    }
    
    var reset = function () {
        clearInterval(interval_id);
    }
    
    var submit = function () {
        $(document).on("click", function () {
            $(this).value
        
        });
    };
    
    
    /* *******************CALLS *********************/
    $("#start").on("click", StartQuestions);
    //$("#submit").on("click", submit);
    
    //$(".question1").on("click", function() {
        //$('input[type="radio"][name="question1"]').last().prop('checked', true);
    //});
    
    
        
    