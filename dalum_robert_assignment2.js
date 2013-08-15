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

// # Functions
var priceOfPrestige = function (amazonPrice){
	var cod = 199;
	while (amazonPrice > 199){
		console.log ("Amazon did have a small deal but not by much. On amazon it was " + amazonPrice + " dollars online and that was not convincing enough to order online.")
		amazonPrice-=5;
	} 
	var betterDeal = ("Might as well buy at store and pick up on day one!")
	return betterDeal;
};

//String
var soExcited = function (excited1, excited2){
	var excitment = ("I can not waite " + excited1 + excited2);
	return excitment;
};

//Boolean
var enoughForGame = function (cashFlow, payPeriod){
	if ((cashFlow > 250) && ((payPeriod === "it is a fantastic day"))) {
		console.log("Just adding another awesome piece to my gaming collection!!!");
		return true;
	}else{
		console.log("I have never missed out on a collectors edition I am really upset.");
		return false;
	}
};



