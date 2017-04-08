//******************************************
//THIS FUNCTION AUGMENTOR SHOULD ACTIVATE
//ALL EVENT HANDLERS FOR DOM FUNCTIONALITY
//******************************************

var CarLot = (function(oldCarLot){
	var userInput = document.getElementById("userInput");

	oldCarLot.setClassSelected = function (e){
		var test = e.target.parentNode.classList;
		userInput.focus(); //set focus of input field

		if (e.target.className === "thumbnail") {
			e.target.classList.add("selected");
			userInput.value = CarLot.originalDescripton();
		} else if (e.target.parentNode.parentNode.className === "thumbnail") {
			e.target.parentNode.parentNode.classList.add("selected");
			userInput.value = CarLot.originalDescripton();
		} else if (e.target.parentNode.className === "thumbnail") {
			e.target.parentNode.classList.add("selected");
			userInput.value = CarLot.originalDescripton();
		}
	},
	oldCarLot.clearClassSelected = function (){
		var selectedElements = document.getElementsByClassName("selected");
		for (var i = 0; i < selectedElements.length; i++) {
			selectedElements[0].classList.remove("selected");
		}
	},
	oldCarLot.originalDescripton = function (){
		var selectedElement = document.getElementsByClassName("selected");
		var captionDiv = selectedElement[0].getElementsByClassName("caption");
		var newD = captionDiv[0].getElementsByTagName("p");
		return newD[0].innerHTML;
	},
	oldCarLot.editText = function (){
		var selectedElement = document.getElementsByClassName("selected");
		var captionDiv = selectedElement[0].getElementsByClassName("caption");
		var newD = captionDiv[0].getElementsByTagName("p");

		var descriptionText = userInput.value;
		newD[0].innerHTML = descriptionText;
	}

	return oldCarLot;

})(CarLot || {});