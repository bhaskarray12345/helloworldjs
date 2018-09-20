var Points = {
	ASTEROIDS: [
		[-4,-2,-2,-4,0,-2,2,-4,4,-2,3,0,4,2,1,4,-2,4,-4,2,-4,-2],
		[-3,0,-4,-2,-2, -4,0, -3, 2, -4, 4, -2, 2, -1, 4, 1, 2, 4,  -1, 3, -2, 4, -4, 2, -3,0],
		[-2,0,-4,-1,-1,-4,2,-4,4,-1,4, 1,2,4,0,4,0,1,-2,4,-4,1,-2,0	],
		[-1,-2,-2,-4,1,-4,4,-2,4,-1,1,0,4,2,2,4,1,3,-2,4,-4,1,-4,-2,-1,-2],
		[-4,-2,-2,-4,2,-4,4,-2,4,2,2,4,-2,4,-4,2,-4,-2]
	],

	SHIP: [6,0,-3,-3,-2,0,-3,3,6,0],
	FLAMES: [-2,0,-3,-1,-5,0,-3,1,-2,0]
}

//Size of how big an asteroid supposed to be.
var AsteroidSize = 12;

//Extends State base class
var GameState = State.extend({
	//Calls parent constructor.
	init: function(game){
		this._super(game);

		this.canvasWidth = game.canvas.ctx.width;
		this.canvasHeight = game.canvas.ctx.height;

		this.ship = new Ship(Points.SHIP, Points.FLAMES, 3, 0, 0);//Last three parameters: size, x, y 
		this.ship.maxX = this.canvasWidth;
		this.ship.maxY = this.canvasHeight;
		this.level = 0;
		this.generateLvl();
	},


	generateLvl: function() {
		var numOfAsteroids = Math.round(this.level + 2);
		
		this.ship.x = this.canvasWidth/2; 
		this.ship.y = this.canvasHeight/2;
		
		this.bullet = [];
		this.asteroids = [];

		//Generate number of asteroids by randomizing the asteroid pattern.
		for(var i = 0; i < numOfAsteroids; i++) {
			
			var n = Math.round(Math.random() * (Points.ASTEROIDS.length - 1 ));

			var x = 0, y = 0;
			if (Math.random() > 0.5) {
				x = Math.random() * this.canvasWidth;
			} else {
				y = Math.random() * this.canvasHeight;
			}

			var astr = new Asteroid(Points.ASTEROIDS[n], AsteroidSize, x,y);
			astr.maxX = this.canvasWidth;
			astr.maxY = this.canvasHeight;
		
			this.asteroids.push(astr);
		}	
	},

	handleInputs: function(input) {

		//Rotate angle speed per left arrow. Higher the number,faster rotation.
		if (input.isDown("left")) {
			this.ship.rotate(-0.09);
		}
		if (input.isDown("right")) {
			this.ship.rotate(0.09);
		}

		//Increase velocity
		this.ship.drawFlames = false;
		if (input.isDown("up")) {
			this.ship.addVel();	
		}
		//New feature: Apply brake.
		if (input.isDown("down")) {
			this.ship.putBrake();	
		}

		//Add bullet to an array.
		if (input.isPressed("spacebar")) {
		   this.bullet.push(this.ship.shoot());
		}
	},

	update: function(){
		//this.poly.rotate(0.01);
		//this.astr.update();
	
		//Updates the current position of all asteroids.
		for( var i=0, len=this.asteroids.length; i<len;i++) {
			var a = this.asteroids[i];
			a.update();

			//For each asteroid, check for each bullet is inside the asteroid.
			for (var j = 0, len2 = this.bullet.length; j < len2; j++) {
				var b = this.bullet[j];

				//If a bullet hits the asteroid, the bullet disappears inside asteroids.
				if (a.hasPoint(b.x,b.y)) {
					this.bullet.splice(j,1);
					len2--;
					j--;

					//If asteroid size is not the smallest
					if (a.size > AsteroidSize/4) {
						
						//Split the asteroid into 2 smaller asteroids of random shape.
						for (var k=0; k<2; k++) {
							var n = Math.round(Math.random() * (Points.ASTEROIDS.length - 1 ));

							var astr = new Asteroid(Points.ASTEROIDS[n], a.size/2, a.x,a.y);
							astr.maxX = this.canvasWidth;
							astr.maxY = this.canvasHeight;
		
							this.asteroids.push(astr);
							//Increment the asteroid count.
							len++;
						}
					}
					//remove the destroyed asteroid.
					this.asteroids.splice(i,1);
					//decrement the asteroid count.
					len--;
					//Decrement i such that the next asteroid is updated.
					//splice() function removes i-th asteroid and all the consequent asteroids get
					//reindexed by 1.     
					i--;
				}
			}
		}

		//Checks for out of bound bullets.
		for( var i=0, len=this.bullet.length; i<len; i++) {
			var b = this.bullet[i];
			b.update();

			//If the bullet is outside the bound
			if (b.shallRemove) {
				//remove the bullet from the list
				this.bullet.splice(i,1);
				//decrement bullet count
				len--;
				//move to the next bullet.
				i--;
			}
		}

		this.ship.update();

		//Increment level when all asteroids are gone.
		if (this.asteroids.length === 0) {

			this.level = this.level + 1;
			console.log( "all asteroid are gone: new level = " + this.level );
			//Draw a new set of asteroids.
			this.generateLvl();
		}
	},

	//ctx paramenter is sent in from main.js
	//note that drawPolygon is a function within ctx.
	render: function(ctx){
		ctx.clearAll();
		//ctx.drawPolygon(this.poly,100,100);
        //this.astr.draw(ctx);
		for( var i=0, len=this.asteroids.length; i<len; i++) {
			this.asteroids[i].draw(ctx);
		}
		for( var i=0, len=this.bullet.length; i<len; i++) {
			this.bullet[i].draw(ctx);
		}
		this.ship.draw(ctx);

	}
});