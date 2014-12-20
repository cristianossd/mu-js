var generateAttributes = function (){
	var character = {
		strength: Math.floor(Math.random()*6)+1,
		armor: Math.floor(Math.random()*6)+1,
		resistance: Math.floor(Math.random()*6)+1,
		health: 0
	};
	character.health = character.resistance*5;
	return character;
}

var calculateDamage = function (charOne,charTwo){
	var totalDamage = charOne.strength * Math.floor(Math.random()*6)+1 - charTwo.armor * Math.floor(Math.random()*6)+1;
	console.log(totalDamage);
}

var simulateBattle = function (){
	var charOne = generateAttributes(), charTwo = generateAttributes();
	console.log(charOne);
	console.log(charTwo);
	calculateDamage(charOne,charTwo);
}