/*
Load state:
Load resources here, set max scales and start menu.



*/


var loadState = {
	preload: function(){
	game.scale.maxWidth = 800;
    	game.scale.maxHeight = 600;
	var loadingLabel = game.add.text(80,50,'loading...',
					{font: '30px Courier', fill: '#ffffff'});
	//game.load.spritesheet('Pad', 'asset/button.png',400,60);
      
       // game.load.image('logo', 'asset/arrow.png');
     
	
	
	},
	
	create: function(){
	game.state.start('menu');
	}
	

};
