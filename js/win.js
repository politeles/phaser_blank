/*

Win state


*/ 



var winState = {

create: function(){

	var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
	
	sKey.onDown.addOnce(this.start,this);
	game.input.onTap.add(function(e){game.state.start('play')});
	
	
	
	},
	start: function(){
	game.state.start('play');
	}

};
