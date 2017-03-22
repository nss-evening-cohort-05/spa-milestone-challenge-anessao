//******************************************
//THIS FUNCTION AUGMENTOR SHOULD ACTIVATE
//ALL EVENT HANDLERS FOR DOM FUNCTIONALITY
//******************************************

var CarLot = (function(oldCarLot){
	
	oldCarLot.activateEvents = function (){
		console.log("activateEvents function works");
		window.addEventListener("click", CarLot.clearClassSelected);
		window.addEventListener("click",  CarLot.setClassSelected);
	}

	return oldCarLot;

})(CarLot || {});