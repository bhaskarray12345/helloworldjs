var Canvas = Class.extend({

	init: function(width,height) {
		this.canvas = document.createElement("canvas");
		this.canvas.height = height;
		this.canvas.width = width;

		//ctx stands for context.
		this.ctx = (function(ctx){
			ctx.width = ctx.canvas.width;
			ctx.height = ctx.canvas.height;

			//seems like x and y are offsets.
			//p is an array of integers. p[0]=x1, p[1]=y1.
			ctx.drawPolygon = function(p,x,y) {
				p = p.points;

				this.beginPath();
				this.moveTo(p[0]+x, p[1]+y);
				for (var i=2, len=p.length; i<len; i +=2){
					this.lineTo(p[i]+x,p[i+1]+y);
				}
				this.stroke();
			};

			ctx.clearAll = function() {
				this.clearRect(0,0,this.width, this.height);
			}

			return ctx;
		})(this.canvas.getContext("2d"));
	
		document.body.appendChild(this.canvas);

	},

	animate: function(loop) {
		
		//Self invoking function the return values are assigned
		//to rf.
		var rf = (function(){
			return window.requestAnimationFrame    ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				
				//In this case cb = l
				//             el = canvas
				//every 1000/60 millisec, function l is called.
				function(cb,el) {
					window.setTimeout(cb, 1000/60);
				}
		})();

		//'self' is assigned since we don't want 'this' to change values.
		var self = this;
		var l = function() {
			loop();  // What is this loop() call do?
			rf(l, self.canvas);
		}
		
		//calling rf function and l as an input parameter which is also a variable function.
		//Question: Above rf function is a self invoking function.  Why the following statement was
		//          needed?
		//Note that if i remove the following line, this whole game will not work!!!  Why?
		rf(l, this.canvas);
	}

});