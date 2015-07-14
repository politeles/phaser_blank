// global vars:


/*

Boot state:
Set size screen and modes

*/


var bootState = {
	create: function(){
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setScreenSize();
	console.log('boot state');
	//generateRandomArrows();
	game.state.start('load');
	}
};
