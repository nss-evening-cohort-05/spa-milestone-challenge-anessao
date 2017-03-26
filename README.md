# Single Page Applications Milestone Challenge# WYSIWYG ASSIGNMENT

##### Working with DOM Handlers, Event Listeners, and XHRequests | Advanced
##### Focus on functionality -> styling using bootstrap

#### ASSIGNMENT PARAMETERS:
# Single Page Applications Milestone Challenge

## Instructions

You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

### Behavior required and implemented:

1. Create an array of cars in the `inventory.json`
1. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object. [code snippet below]
```
newData = JSON.parse(inventoryLoader.responseText); //PARSING THE JSON STRING INTO A USABLE OBJECT
inventory.push(newData); //BUILDING ARRAY OF JSON DATA
```

1. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`. __Hint:__ You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
1. Put a standard Bootstrap navbar element at the top of your page.
1. Put a text `<input>` field in the navigation bar.
1. Make sure you display all properties of the car in the DOM. Basic styling is up to you.
1. Make sure that each car card element has a CSS class which adds a black border around it.
  - added the 'selected' class using `.addClass()` method
1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
1. Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
1. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

### Technical Requirements

1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
1. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
1. The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accepts an arguments.
    1. A car DOM element that was clicked on.
    1. A color name of your choice (see behavior requirement 5 above).
1. Have a complete Readme [completed here!]

#### HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/spa-milestone-challenge-anessao
2. cd spa-milestone-challenge-anessao
3. npm install http-server -g
4. http-server -p 8080
```

#### SCREENSHOT AND COMPARISONS OF BEFORE/AFTER BUTTON CLICKS
![demo front page screenshot](https://raw.githubusercontent.com/nss-evening-cohort-05/spa-milestone-challenge-anessao/challenge/images/Screen%20Shot%202017-03-26%20at%201.07.58%20AM.png)

#### TECHNOLOGIES USED
- JavaScript
- HTML
- CSS
- JSON
- bootstrap