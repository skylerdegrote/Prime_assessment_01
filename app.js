$(document).ready(function(){
	console.log("Ready!");





var numclicks=0;
//the first half of this function is working
	$("body").on("click", ".mainButton", function(){
		counter();
		
		$("body").append("<button id='colorButton'>Change color </div>");
		$("body").append("<button id='removeButton'>Remove </div>");
	})
	$("body").on("click", "#colorButton",function(){
		console.log("the div should be red now");
		red();
	})
var remove = function(){
	$("body").on("click", "#removeButton", function(){
		console.log(remove);
	})
};

var red = function(){
	$(".textDiv").css("background-color", "red");
};


//this function is working
	var counter = function(){
		$(".textDiv").remove(".textDiv");
		numclicks++;//counts up
		$("body").append("<div class='textDiv green'>Here are the number of clicks: "+numclicks+"</div>");//creates div with text
	}
	 

















// function addToList(first, last, num, title, review, salary){
// 		var reviewNum= "review"+employeeList.lastReviewScore;

// 		$("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
// 			+first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
// 			"</p><p>"+salary+" </p><button id='removeButton'>Fire this Person</button></div>");
// 	}




// var numOfClicks = 0;
// 	$("#alertButton").on("click", function(){
// 			numOfClicks++;
// 			console.log('CLICKED!');
// 				//.prepend - insert content inside the selected element as first element...becomes a child of selected element
// 				//.append - insert content inside the selected element as last element...becomes a child of selected element
// 				//.before - insert content before the selected element
// 				//.after - insert content after the selected element
// 			$("#anotherDiv").children().remove();
// 			$("#anotherDiv").append("<p>Here are the clicks: "+ numOfClicks+ "</p>");
			
// 	});







});//close doc ready