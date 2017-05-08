var BlinkingMarker = function(options) {
	
	this.message = options.message
	this.marker = new ROS3D.Marker(options)
	this.visible = true
}


BlinkingMarker.prototype.blink = function(options={}) {
	var interval = 20; // this is the default
	if(options.interval) {
		interval = options.interval
	}

	var updateObject = function() {
   
    if(this.visible === true) {
      this.visible = false
      this.message.color = {r: 1,g: 1, b: 1, a: 1}
    } else {
      this.visible = true
      this.message.color = {r:0 ,g: 1, b: 0, a: 1}
    }

    this.marker.update(this.message)
  }

  // This is the internal timer to stop blinking
  this.__timer = setInterval(updateObject.bind(this), interval)  
  
}

BlinkingMarker.prototype.stopBlinking = function() {
	clearInterval(this.__timer)

}


