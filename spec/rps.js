describe('Engine', function() {
  it('Knows rock beats scissors', function() {
    game = new Game;
    game.userInput('Rock');
    game.cpuInput('Scissors');
    // expect(game.cpuWeapon).toEqual('Rock')
    game.result();
    expect(game.winner).toEqual('Rock Wins');
  });
});