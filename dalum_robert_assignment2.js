alert("JavaScript works!");

// Robert Dalum
// SDI0813
//Assignment 2

var anticipatedGame = ["Call of Duty: Ghosts"];
var stores = ["Gamestop, Best Buy, Walmart"];
var quantity = [100, 75, 200];
var daysLeft = 2

//Procedure
var getStores = function (storesQuantity){
	var averageQuantity = 125;
	if (averageQuantity < storesQuantity){
		console.log("If the prestige edition has limited quantities I have to rush to the store and pre-order!");
	}else{
		console.log("I have plenty of time to pre-order.");
	}
};