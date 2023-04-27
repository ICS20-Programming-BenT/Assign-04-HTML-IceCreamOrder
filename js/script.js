// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/19/2023
// This file contains the JS functions for index.html

"use strict";

function toggleToppings() {
  let coneType = document.getElementById("cone-type").value;

  if (coneType !== "0") {
    document.getElementById("chocolate-syrup").disabled = false;
    document.getElementById("whipped-cream").disabled = false;
    document.getElementById("chopped-walnuts").disabled = false;
    document.getElementById("rainbow-sprinkles").disabled = false;
    document.getElementById("maraschino-cherries").disabled = false;
    document.getElementById("caramel-bits").disabled = false;
  } 
  else {
    document.getElementById("chocolate-syrup").disabled = true;
    document.getElementById("whipped-cream").disabled = true;
    document.getElementById("chopped-walnuts").disabled = true;
    document.getElementById("rainbow-sprinkles").disabled = true;
    document.getElementById("maraschino-cherries").disabled = true;
    document.getElementById("caramel-bits").disabled = true;
  }
}

function OrderGiven() {

  // Setting a constant for taxes, toppings price, brownie price and coffee price
  const HST = 0.13;
  const PRICE_TOPPINGS = 0.50;
  const PRICE_BROWNIES = 3.00;
  const PRICE_COFFEES = 2.00;
  
  // Declaring variable for base cost that will be determined later on
  let baseCost = 0;
  
  // Getting user input for cone type, cone size, number of brownies and number of coffees
  let coneType = document.getElementById("cone-type").value;
  let coneSize = document.getElementById("cone-size").value;
  let numBrownies = parseInt(document.getElementById("amount-brownies").value);
  let numCoffees = parseInt(document.getElementById("amount-coffees").value);
  
  // Determining the number of toppings selected based on number of checkboxes checked
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  // Using determined value to declare variable for number of toppings chosen
  let numToppings = checkboxes.length;
  
  // Determining the cost of the toppings using number of toppings variable and cost of toppings constant
  let costToppings = numToppings * PRICE_TOPPINGS;
  
  // Determining the cost of the base ice cream cone using compound if statements
  // If the cone type is sugar and the size is small
  if ((coneType == "sugar") && (coneSize == "small")) {
    baseCost = 4.00;
  }
    
  // If the cone type is waffle and the size is small
  else if ((coneType == "waffle") && (coneSize == "small")) {
    baseCost = 4.25;
  }
    
  // If the cone type is sugar and the size is medium
  else if ((coneType == "sugar") && (coneSize == "medium")) {
    baseCost = 5.00;
  }
    
  // If the cone type is waffle and the size is medium
  else if ((coneType == "waffle") && (coneSize == "medium")) {
    baseCost = 5.25;
  }
    
  // If the cone type is sugar and the size is large
  else if ((coneType == "sugar") && (coneSize == "large")) {
    baseCost = 6.00;
  }
    
  // If the cone type is waffle and the size is large
  else if ((coneType == "waffle") && (coneSize == "large")) {
    baseCost = 6.25;
  }

  else {
    baseCost = 0.00;
  }
  
  // Determining the cost of the sides using number of sides variables and prices of sides constants
  let costBrownies = numBrownies * PRICE_BROWNIES;
  let costCoffees = numCoffees * PRICE_COFFEES;
  
  // Calculating the subtotal, tax and total
  let subtotal = baseCost + costToppings + costBrownies + costCoffees;
  let taxes = subtotal * HST;
  let total = subtotal + taxes;

  // Displaying the total to the user in the "results" div
  document.getElementById("order").innerHTML = "You ordered a " + coneSize + " ice cream with a " + coneType + " cone. You chose " + numToppings + " topping(s) for your ice cream, as well as " + numBrownies + " brownie(s) and " + numCoffees + " coffee(s). Your subtotal is $" + subtotal.toFixed(2) + ". The amount of taxes added due to HST is $" + taxes.toFixed(2) + ". Your total is $" + total.toFixed(2) + ".";
  
}