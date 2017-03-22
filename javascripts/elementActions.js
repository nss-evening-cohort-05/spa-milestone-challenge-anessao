//******************************************
//THIS FUNCTION AUGMENTOR SHOULD ACTIVATE
//ALL EVENT HANDLERS FOR DOM FUNCTIONALITY
//******************************************

var CarLot = (function(oldCarLot){
	
	oldCarLot.setClassSelected = function (e){
		var test = e.target.parentNode.classList;
		console.log("target node test", test);
		if (e.target.className === "thumbnail") {
			console.log("inside if", e.target.className);
			e.target.classList.add("selected");
		} else if (e.target.parentNode.parentNode.className === "thumbnail") {
			e.target.parentNode.parentNode.classList.add("selected");
		} else if (e.target.id.value === "carInfo") {
			console.log("third if passed");
		} else if (e.target.parentNode.className === "thumbnail") {
			console.log("img if passed");
			e.target.parentNode.classList.add("selected");
		}
	},
	oldCarLot.clearClassSelected = function (){
		var selectedElements = document.getElementsByClassName("selected");
		for (var i = 0; i < selectedElements.length; i++) {
			selectedElements[0].classList.remove("selected");
		}
	}

	return oldCarLot;

})(CarLot || {});