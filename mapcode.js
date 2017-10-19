function loadGPXFileIntoGoogleMap(map, filename) {
    $.ajax({url: filename,
        dataType: "gpx",
        success: function(data) {
          var parser = new GPXParser(data, map);
          parser.setTrackColour("#ff0000");     // Set the track line colour
          parser.setTrackWidth(5);          // Set the track line width
          parser.setMinTrackPointDelta(0.001);      // Set the minimum distance between track points
          parser.centerAndZoom(data);
          parser.addTrackpointsToMap();         // Add the trackpoints
          parser.addRoutepointsToMap();         // Add the routepoints
          parser.addWaypointsToMap();           // Add the waypoints
        }
    });
}

function initMap() {
	alert("Working");
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	return map;
}

$(document).ready(function() {
    var map = initMap();
    loadGPXFileIntoGoogleMap(map, "Lugano.gpx");
});
