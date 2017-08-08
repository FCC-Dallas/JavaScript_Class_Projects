//The Feed your Dog Web App

//Variables:
//Initial Amount
let scoobySnacks = 100;
//Timer
let time = "6pm";
//Bowl
let foodLeftInBowl = 0;
//Quantity released each time
let amountReleased = 5;
//Dog
let dog;
//Amount eaten by dog
let amountEaten;

//Check Bowl 
function checkBowl(){
	if(foodLeftInBowl <= 10 && foodLeftInBowl >= 0) {
		//We add dat food fam
		foodLeftInBowl += amountReleased;
		//Subtract amount released from ScoobySnacks
		scoobySnacks = scoobySnacks - amountReleased;
		console.log(foodLeftInBowl);
		console.log(scoobySnacks);
	}
	else{
		return false;
	}
}


function amountEatenByDog(){
	//amount in the bowl
		//randomly eat a certain amount 1-4
		//console.log to check amount eaten
}


//Function that releases the food based on time of day
function whatTime() {
	let initialQuestion = prompt("What time is it?");

	if (initialQuestion == time) {
		//true
		//Check the bowl
		checkBowl();
		//Dog eat

	}
	else {
		//false 
		alert("Sorry homie you can't eat");
	}

}

//calling the function
//eliminate this and create button on front end
whatTime();




