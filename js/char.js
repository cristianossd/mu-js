Character = function() {
  this.strength = Math.floor(Math.random() * 4) + 1;
  this.armor = Math.floor(Math.random() * 4) + 1;
  this.skill = Math.floor(Math.random() * 4) + 1;
  this.firePower = Math.floor(Math.random() * 4) + 1;
  this.resistance = Math.floor(Math.random() * 4) + 1;
  this.health = this.resistance * 5;
}

Character.prototype.constructor = Character;
