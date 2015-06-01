game = new Game;

$(document).ready( function() {
  $('#user-weapon input').click(function () {
    var weapon = $('form input[type=radio]:checked').val();
    game.userInput(weapon);
    $('#user-choice').html('You chose ' + game.userWeapon);
    $("input:radio").removeAttr('checked');
    game.generate();
    $('#cpu-choice').html('Cpu chose ' + game.cpuWeapon);
    game.result();
    $('#result').html(game.winner);
  });
});