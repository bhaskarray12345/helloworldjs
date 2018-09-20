var Ship = Polygon.extend({
	
	maxX: null,
	maxY: null,

	init: function(p,pf,s,x,y){
		this._super(p);

		this.flames = new Polygon(pf);
		this.flames.scale(s);

		this.drawFlames = false;

		this.x = x;
		this.y = y;

		this.scale(s);

		this.angle = 0.0;

		//Circulation velocity
		this.vel = {
			x: 0,
			y: 0
		}
	},

	//Returns a bullet.
	shoot: function() {
		//points[0,1] represents the tip of the ship.
		//Creates an initial bullet position equal to the ship's sharp corner. 
		var b = new Bullet(this.points[0] + this.x, this.points[1] + this.y, this.angle);
		
		//Question: Why is it setting to NULL?
		b.maxX = this.maxX;
		b.maxY = this.msxY;
		return b;
	},

	addVel: function() {  // Pythagorean theorm a*a + b*b = c*c.  In this case 20*20 is the max speed.  
		if (this.vel.x*this.vel.x + this.vel.y*this.vel.y <20*20) {
			this.vel.x += 0.20*Math.cos(this.angle);  // 0.05 controls the speed. Higher the faster. 
			this.vel.y += 0.20*Math.sin(this.angle);
		}
		this.drawFlames = true;

	},
	putBrake: function() {  // Pythagorean theorm a*a + b*b = c*c.  In this case 20*20 is the max speed.  
		
		//slows down the ship
		//higher the number means slower to stop.
		this.vel.x *= 0.50;
		this.vel.y *= 0.50;

	},

	rotate: function(theta) {
		this._super(theta);
		this.flames.rotate(theta);
		this.angle += theta;
	},

	//Updates new position of each vertex of asteroid in relationship to its velocity.
	update: function() {
		//Calculates change in (x,y).
		this.x += this.vel.x;
		this.y += this.vel.y;

		//If the asteroid goes to right of the bound,
		//it now appears on the left.
		//If the asteroid goes to left of the bound,
		//it now appears on the right.
		if (this.x > this.maxX ) {
			this.x = 0;
		} else if ( this.x < 0) {
			this.x = this.maxX;
		}
		
		//slows down the ship
		this.vel.x *= 0.98;
		this.vel.y *= 0.98;

		//If the asteroid goes above the bound,
		//it now appears on the bottom.
		//If the asteroid goes below the bound,
		//it now appears on the top.
		if (this.y > this.maxY ) {
			this.y = 0;
		} else if ( this.y < 0) {
			this.y = this.maxY;
		}
	},

	draw: function(ctx) {
		ctx.drawPolygon(this, this.x, this.y);
		if (this.drawFlames) {
			ctx.drawPolygon(this.flames, this.x, this.y);
		}
	}
})