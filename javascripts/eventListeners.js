//******************************************
//THIS FUNCTION AUGMENTOR SHOULD ACTIVATE
//ALL EVENT HANDLERS FOR DOM FUNCTIONALITY
//******************************************

var CarLot = (function(oldCarLot){
	
	oldCarLot.activateEvents = function (){
		var carInventoryDiv = document.getElementById("car-inventory");


		console.log("activateEvents function works");
		carInventoryDiv.addEventListener("click", CarLot.clearClassSelected);
		window.addEventListener("click",  CarLot.setClassSelected);
		userInput.addEventListener("keyup", CarLot.editText);
	}

	return oldCarLot;

})(CarLot || {});