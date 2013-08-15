alert("JavaScript works!");

// Robert Dalum
// SDI0813
//Assignment 2

var anticipatedGame = ["Call of Duty: Ghosts"];
var stores = ["Gamestop, Best Buy, Walmart"];
var quantity = [100, 75, 200];
var daysLeft = 2

//Procedure
var getStoresQ = function (storesQuantity){
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
	var excitment = ("I can not wait " + excited1 + excited2);
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

//Array
var getQuantity = function (quantity, daysLeft) {
	var gotToHurry = [];
	for (var i = 0; i < quantity.length; i++){
		var math = (daysLeft - quantity[i])
		gotToHurry.push(math)
	}
	return gotToHurry;
};

//CONSOLE LOGS
console.log("I just saw the MP reveal of " + anticipatedGame + " and it was AMAZING!!!");
console.log("Since the reveal was an hour long and I had to go to work I had to wait till I got home to read more about it.");
getStoresQ(150);

console.log("After work I got online and checked what else was said about COD's prestige edition.")
var goodDeal = priceOfPrestige(199);
console.log(goodDeal);

console.log("Even though I would be paying a little more at the store it is going to be worth it getting it on day one!!!")
var greatMood = soExcited("FOR THIS GAME!!!, The collectors edition is so AMAZING!!!");
console.log(greatMood);

console.log("Now was I going to have enough money to pay for it. And the answer is yes!");
enoughForGame(800, "it is a fantastic day")

console.log("After checking money situation and everything I called a few places.");
var gotToHurry = getQuantity(quantity, daysLeft);
for (var i = 0; i < stores.length; i++) {
	console.log(stores[i] + " told me that there will only be " + daysLeft + " days only to preorder so I better hurry if I want to keep my collection going.");
};


