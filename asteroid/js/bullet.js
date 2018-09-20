var Bullet = Class.extend({
	
	maxX: null,
	maxY: null,

	init: function(x,y, angle) {

		this.x = x;
		this.y = y;
			
		this.shallRemove = false;

		//Set the velocit of the bullet.
		this.vel = {
			x: 10*Math.cos(angle),
			y: 10*Math.sin(angle)
		}
	},

	update: function(){
		this.prevx = this.x;
		this.prevy = this.y;

		//Check if a bullet is out of bound.
		//If it is, assign the flag shallRemove to true.
		if ( this.x < 0 || this.x > this.maxX ||
			 this.y < 0 || this.y > this.maxY ) {
			this.shallRemove = true;
		}
		//Change the bullet's position by its velocity.
		this.x += this.vel.x;
		this.y += this.vel.y;
	},

	//Draws a path of single bullet of an instant in time.
	//In the screen, it looks like it is a dot.  But it really is a line.
	draw: function(ctx) {
		ctx.beginPath();
		ctx.moveTo(this.prevx, this.prevy);
		ctx.lineTo(this.x, this.y);
		ctx.stroke();
	}
});