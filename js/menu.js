/*

Sample menu state:
display instructions for playing the game



*/



var menuState = {
	create: function(){
	game.stage.backgroundColor = "#000000";
		var nameLabel = game.add.text(80,80, 'Game',
		{font:'50px Arial',fill: '#ffffff'});
		
		var startLabel = game.add.text(80,game.world.height-80,
		 'Press S or tap to start',
		{font:'25px Arial',fill: '#ffffff'});
	
	var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
	
	sKey.onDown.addOnce(this.start,this);
	game.input.onTap.add(function(e){game.state.start('play')});
	
	
	
	
	},
	start: function(){
	game.state.start('play');
	}



};
