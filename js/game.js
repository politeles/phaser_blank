/*

This is where the game is defined:
You can set the height and width of the screen, and the options for PHASER.CANVAS

Here all states are added to the game.




*/


 var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');
 
game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',playState);
game.state.add('win',winState);
     
     
game.state.start('boot');    
     
