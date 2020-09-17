$(document).ready(function() { //dothis when document is loaded
	$("#dialContent").show(); //show the element with ID "dialcontent"
	$("#contactContent").hide();
	$("#addContent").hide(); //hide the element with id 'addcontent'
});

//$("#x") means 'do something to the HTML tag with ID "x"'

$("#tab2Button").click(function() {//when 'tab1button' is clicked
	$("#contactContent").show(); //show element
	$("#dialContent").hide();
	$("#addContent").hide();
})

$("#tab3Button").click(function() {//when 'tab1button' is clicked
	$("#addContent").show(); //show element
	$("#dialContent").hide();
	$("#contactContent").hide();
})

$("#tab1Button").click(function() {//when 'tab1button' is clicked
	$("#dialContent").show(); //show element
	$("#contactContent").hide();
	$("#addContent").hide();
})