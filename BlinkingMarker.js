var BlinkingMarker = function(options) {
	this.message = options.message
	this.marker = new ROS3D.Marker(options)
	this.color = "green"
}


BlinkingMarker.prototype.blink = function() {
	var updateObject = function() {
    console.log("blinking")
    var message = this.message
    console.log("color: ", color)
    if(this.color == "green") {
      this.color = "white"
      message.color = {r: 1,g: 1, b: 1, a: 1}
    } else {
      this.color = "green"
      message.color = {r:0 ,g: 1, b: 0, a: 1}
    }

    marker.marker.update(message)
  }

  var timer = setInterval(updateObject, 20)  
  
}

// ROS3D.Marker.prototype.update = function(message) {

// }

