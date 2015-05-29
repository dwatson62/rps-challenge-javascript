function Game() {
  this.userWeapon = ''
  this.cpuWeapon = ''
  this.winner = ''
};

Game.prototype.userInput = function(weapon) {
  this.userWeapon = weapon;
};

Game.prototype.cpuInput = function(weapon) {
  this.cpuWeapon = weapon;
};

Game.prototype.result = function() {
  if(this.userWeapon == 'Rock' && this.cpuWeapon == 'Scissors') {
    this.winner = 'Rock Wins';
  }
};