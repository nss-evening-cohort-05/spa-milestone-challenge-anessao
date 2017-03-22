function populatePage (data) {

	//"data" is passed from private array in CarLot.js
    //Loop over the inventory and populate the page
    var carInventoryDiv = document.getElementById("car-inventory");
    var inventoryString = "";
	    for (let x = 0; x < data[0].cars.length; x++) {
	  	inventoryString += `<div class="col-sm-6 col-md-4 carInfo" id="carInfo">`
		inventoryString += `<div class="thumbnail">`
		inventoryString += `<img src="${data[0].cars[x].url}" alt="...">`
		inventoryString += `<div class="caption">`
		inventoryString += `<h3>${data[0].cars[x].make} ${data[0].cars[x].model}</h3>`
		inventoryString += `<h4>Year: ${data[0].cars[x].year}</h4>`
		inventoryString += `<h4>Price: ${data[0].cars[x].price}</h4>`
		inventoryString += `<p>${data[0].cars[x].description}</p>`
		inventoryString += `</div></div></div>`;
  	};
  	//SET DOM ELEMENT WITH STRING BUILT FROM FOR-LOOP
  	carInventoryDiv.innerHTML = inventoryString;

  	//ESTABLISH EVENT LISTENERS
  	CarLot.activateEvents();
};

//FUNCTION THAT FIRES OFF XHRequest EVENT
CarLot.loadInventory(populatePage); //run populatePage as callback function

