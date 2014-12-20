var generateAttributes = function (charName,maxPoints){
	var resistancePoints = 1, max;

	if (maxPoints > 0) {
		max = (maxPoints < 5) ? maxPoints : 5;
		strengthPoints = Math.floor(Math.random()*max+1)+1;
		maxPoints -= strengthPoints;
	}
	else
		strengthPoints = 0;

	if (maxPoints > 0) {
		max = (maxPoints < 5) ? maxPoints : 5;
		armorPoints = Math.floor(Math.random()*max+1)+1;
		maxPoints -= armorPoints;
	}
	else
		armorPoints = 0;

	if (maxPoints > 0) {
		max = (maxPoints < 5) ? maxPoints : 5;
		resistancePoints = Math.floor(Math.random()*max+1)+1;
		maxPoints -= resistancePoints;
	}

	healthPoints = resistancePoints*5;

	var character = {
		name: charName,
		strength: strengthPoints,
		armor: armorPoints,
		resistance: resistancePoints,
		health: healthPoints
	};
	console.log(character);
	return character;
}

var calculateDamage = function (charOne, charTwo){
	var totalDamage = charOne.strength * Math.floor(Math.random()*6)+1 - charTwo.armor * Math.floor(Math.random()*6)+1;
    return totalDamage;
}

var simulateBattle = function (oneName, oneMaxPoints, twoName, twoMaxPoints){
	var charOne = generateAttributes(oneName.value, oneMaxPoints.value-1),
		charTwo = generateAttributes(twoName.value, twoMaxPoints.value-1),
		turn = 0;
    
    while(charOne.health > 0 && charTwo.health > 0) {
        if (turn == 0) {
            damage = calculateDamage(charOne, charTwo);
            if (damage > 0) {
                console.log("charOne damaged " + damage);
                charTwo.health -= damage;
            }
            else
                console.log("charOne didn't damage");
        }
        else {
            damage = calculateDamage(charTwo, charOne);
            if (damage > 0) {
                console.log("charTwo damaged " + damage);
                charOne.health -= damage;
            }
            else
                console.log("charTwo didn't damage");
        }
        turn = 1 - turn;
    }
    
    if (charTwo.health < 0)
        console.log("* " + charOne.name);
    else
        console.log("* " + charTwo.name);
}