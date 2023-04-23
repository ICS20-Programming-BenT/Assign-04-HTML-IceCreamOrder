// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/19/2023
// This file contains the JS functions for index.html

"use strict";

function orderSent() {
  // Setting a constant for taxes, toppings price, brownie price and coffee price
  const HST = 0.13;
  const PRICE_TOPPINGS = 0.50;
  const PRICE_BROWNIES = 3.00;
  const PRICE_COFFEES = 2.00;
  
  // Declaring cost of cone without toppings
  let baseCost = 0;
  
  // Getting user input for cone type, cone size, number of brownies and number of coffees
  let coneType = document.getElementById("cone-type").value;
  let coneSize = document.getElementById("cone-size").value;
  let numBrownies = parseInt(document.getElementById("brownies").value);
  let numCoffees = parseInt(document.getElementById("coffees").value);
  
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
    
  // if the cone type is waffle and the size is medium
  else if ((coneType == "waffle") && (coneSize == "medium")) {
    baseCost = 5.25;
  }
    
  // If the cone type is sugar and the size is large
  else if ((coneType == "sugar") && (coneSize == "large")) {
    baseCost = 6.00;
  }
    
  //if the cone type is waffle and the size is large
  else if ((coneType == "waffle") && (coneSize == "large")) {
    baseCost = 6.25;
  }
  
  // Determining the cost of the sides using number of sides variables and prices of sides constants
  let costBrownies = numBrownies * PRICE_BROWNIES;
  let costCoffees = numCoffees * PRICE_COFFEES;
  
  // Calculating the subtotal, tax and total
  let subtotal = baseCost + costToppings + costBrownies + costCoffees;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  // Displaying the total to the user in the "results" div
  document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of taxes added due to HST is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}