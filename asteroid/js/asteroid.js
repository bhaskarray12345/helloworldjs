var Asteroid = Polygon.extend({
	
	init: function(p,s,x,y){
		this._super(p);

		this.size = s;

		this.x = x;
		this.y = y;
		this.scale(s);

		//Rotation speed.  Higher the number the faster the rotation.
		//0.01 - slow rotation
		//0.02 - faster rotation
		//0.03 - super fast rotation

		this.rotAngle = 0.02*(Math.random()*2-1);

		//Get random velocity.  Remember that there are X-velocity and Y-velocity.
		//r seems to represent radius.
		//If is, this is a random generation radius.
		var r = 2*Math.PI*Math.random()*1;
		
		//Modify the velocity.
		// Math.random()*1 + 1 is slow
        // Math.random()*4 + 1 is fast
		var v = Math.random()*1 + 1;

		//Circulation velocity
		this.vel = {
			x: v*Math.cos(r),
			y: v*Math.sin(r)
		}
	},

	hasPoint: function(x,y) {
		return this._super(this.x, this.y, x,y);
	},

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
		
		//If the asteroid goes above the bound,
		//it now appears on the bottom.
		//If the asteroid goes below the bound,
		//it now appears on the top.
		if (this.y > this.maxY ) {
			this.y = 0;
		} else if ( this.y < 0) {
			this.y = this.maxY;
		}
		this.rotate(this.rotAngle);
	},

	draw: function(ctx) {
		ctx.drawPolygon(this, this.x, this.y);
	}
})