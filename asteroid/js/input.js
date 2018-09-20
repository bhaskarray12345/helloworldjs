var InputHandler = Class.extend({
	
	init: function(keys) {  //input parameter 'keys' looks like {left:37, up:38}
		this.keys = {};
		this.down = {};
		this.pressed = {};

		for(key in keys) {
			var code = keys[key];  //assigned a numerical ASCII code?

			this.keys[code] = key; //this gets text value.  Reverses key value.Final associative array looks like {37:left, 38:up}
			this.down[key]  = false; // 'down'  array will look like { left:true}
			this.pressed[key] = false; // 'pressed' array will look like {left:true}
		}
		var self = this;

		//Call back function when a key is down.
		document.addEventListener( "keydown",  function(evt){
			if (self.keys[evt.keyCode]) {  //evt.keyCode is a numerical value.  e.g. if (self.keys[37]) exists
				self.down[self.keys[evt.keyCode]] = true;  // e.g. self.down['left'] = true;
				console.log(self.down);
			}
		});

		document.addEventListener( "keyup",  function(evt){
			if (self.keys[evt.keyCode]) {  //evt.keyCode is a numerical value.  e.g. if (self.keys[37]) exists
				self.down[self.keys[evt.keyCode]] = false;  // e.g. self.down['left'] = true;
				self.pressed[self.keys[evt.keyCode]] = false;  // e.g. self.down['left'] = true;
				console.log(self.down);
			}			
		});
	},

	isDown: function(key) {
		return this.down[key];  //returns true or false
	},

	isPressed: function(key) {
		if (this.pressed[key]) {  //if the pressed[key] exists and it is true, return false
			return false;
		} else if (this.down[key]) {  //if the down[key] exists and it is true, 
			return this.pressed[key] = true; //.set to true and return true.
		}
		return false;
	}
	
});