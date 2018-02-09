
class NumberedBox extends createjs.Container {
	constructor(number=0){
		super();
		var movieclip = lib.NumberedBox();
		movieclip.numberText.text = number;
		this.addChild(movieclip);
		this.setBounds(0,0,50,50);

		

	}
}


class Game{
  constructor() {
    console.log(`Welcome to the game. Version ${this.version()}`);

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);
    this.stage.width =  this.canvas.width
    this.stage.height = this.canvas.height


    createjs.Ticker.setFPS(60);

    // keep re-drawing the stage.
    createjs.Ticker.on("tick", this.stage);


   	this.stage.addChild(new lib.Background());

    this.generateMultipleBoxes();
    

  }
  version(){
    return '1.0.0';
  }
  generateMultipleBoxes(amount = 10){
  	for (var i=amount; i>0; i--){
  		var movieclip = NumberedBox(i);
  		this.stage.addChild(movieclip);
  		movieclip.x = Math.random() = this.stage.width - movieclip.getBounds().width;
		movieclip.y = Math.random() = this.stage.height - movieclip.getBounds().height;

  	}
  }

}

// start the game
var game = new Game();