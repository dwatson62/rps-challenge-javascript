describe('Engine', function() {

  beforeEach( function() {
    game = new Game;
  });

  it('Knows rock beats scissors', function() {
    game.userInput('Rock');
    game.cpuInput(2);
    game.result();
    expect(game.winner).toEqual('Rock Wins');
  });
  it('Knows scissors beats paper', function() {
    game.userInput('Scissors');
    game.cpuInput(3);
    game.result();
    expect(game.winner).toEqual('Scissors Wins');
  });
  it('Knows paper beats rock', function() {
    game.userInput('Paper');
    game.cpuInput(1);
    game.result();
    expect(game.winner).toEqual('Paper Wins');
  });
  it('Knows rock and rock is a draw', function() {
    game.userInput('Rock');
    game.cpuInput(1);
    game.result();
    expect(game.winner).toEqual('Draw');
  })
});