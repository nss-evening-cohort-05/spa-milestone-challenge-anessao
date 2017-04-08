var CarLot = (function () {
  	var inventory = [];

  	return {
	    loadInventory: function (callback) {  //CALLBACK FUNCTION PASSED IN TO PROCESS DATA
	    	var inventoryLoader = new XMLHttpRequest();
	    	inventoryLoader.onreadystatechange = function(){
	    		//IF STATEMENT TO ENSURE DATA IS READY PRIOR TO BUILDING INVENTORY STRING
	        	if (inventoryLoader.readyState == 4 && inventoryLoader.status == 200){
	        		newData = JSON.parse(inventoryLoader.responseText); //PARSING THE JSON STRING INTO A USABLE OBJECT
	        		inventory.push(newData); //BUILDING ARRAY OF JSON DATA
	            	callback(inventory); //CALLING CALLBACK FUNCTION PASSED IN
	        	}
	    	}; 
	    	inventoryLoader.open('GET', "../inventory.json");
	    	inventoryLoader.send();
		},
		getInventory: function () {
			//PUBLIC ACCESS POINT FOR PRIVATE INVENTORY ARRAY
			return inventory;
		}
	}
})();



