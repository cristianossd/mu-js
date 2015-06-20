
function character() {

  var strength;
  var armor;
  var skill;
  var firePower;
  var health;
}

function randomize() {

  return Math.floor(Math.random() * 10);
}

function generateCharacter() {

  var newCharacter = new character();
  
  newCharacter.strength = randomize();
  newCharacter.armor = randomize();
  newCharacter.skill = randomize();
  newCharacter.firePower = randomize();
  newCharacter.health = (newCharacter.skill * 5) + 1;

  return console.log(newCharacter); 
}
