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

var calculateDamage = function (charOne, charTwo){
	var totalDamage = charOne.strength * Math.floor(Math.random()*6)+1 - charTwo.armor * Math.floor(Math.random()*6)+1;
    return totalDamage;
}

var simulateBattle = function (){
	var charOne = generateAttributes(), charTwo = generateAttributes(), turn = 0;
	console.log(charOne);
	console.log(charTwo);
	
    
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
        console.log("* charOne");
    else
        console.log("* charTwo");
}