function Game() {
  this.userWeapon = ''
  this.cpuWeapon = ''
  this.winner = ''
};

Game.prototype.userInput = function(weapon) {
  this.userWeapon = weapon;
};

Game.prototype.generate = function() {
  var x = Math.floor((Math.random() * 3) + 1);
  this.cpuInput(x);
};

Game.prototype.cpuInput = function(x) {
  if(x == 1) {
    this.cpuWeapon = 'Rock';
  }
  else if(x == 2) {
    this.cpuWeapon = 'Scissors';
  }
  else if(x == 3) {
    this.cpuWeapon = 'Paper';
  }
};

Game.prototype.result = function() {
  if(this.userWeapon == 'Rock' && this.cpuWeapon == 'Scissors') {
    this.winner = 'Rock Wins';
  }
  else if(this.userWeapon == 'Scissors' && this.cpuWeapon == 'Paper') {
    this.winner = 'Scissors Wins';
  }
  else if(this.userWeapon == 'Paper' && this.cpuWeapon == 'Rock') {
    this.winner = 'Paper Wins';
  }
  else if(this.userWeapon ==  this.cpuWeapon) {
    this.winner = 'Draw';
  }

};