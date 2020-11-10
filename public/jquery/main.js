const menu = document.querySelector('.menu');
const btn = document.querySelectorAll('button.nav-tgl');
// btn.addEventListener('click', evt => {
// 	// menu.classList.toggle('active');
// 	console.log(menu)
// 	console.log('clicked')
// })
btn.forEach(button => {
	button.addEventListener('click', e => {
		menu.classList.toggle('active')
	})
})

$(function() {
  // Handler for .ready() called.

});

  $(document).ready(function() {

    new WOW().init();
    

});


var locations = [
    ['Jovai Concepts', '5045 W 1st Ave, Denver', 'http://www.jovialconcepts.org'],
    ['City Floral', '1440 Kearney St, Denver', 'http://www.cityfloralgreenhouse.com'],
    ['Skypilot Farm', '10384 Airport Rd, Longmont', 'http://www.skypilotfarm.com'],
    ['Tribucha', '10047 Park Meadows Dr Unit A', ''],
    ['Shrinkle Chic Boutique', '8377 W. Morraine Littleton', ''],
    ['Susan Loves William', '6851 S Gaylord St, Centennial', 'http://www.susanloveswilliam.com']
  ];
  function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(39.742043, -104.991531),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();
      var geocoder = new google.maps.Geocoder();

      var marker, i;

      for (i = 0; i < locations.length; i++) {
        geocodeAddress(locations[i]);
        console.log('locations[i] ' + locations[i])
      }

  function geocodeAddress(location) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': location[1]}, function(results, status) {
    //alert(status);
      if (status == google.maps.GeocoderStatus.OK) {

        //alert(results[0].geometry.location);
        map.setCenter(results[0].geometry.location);
        createMarker(results[0].geometry.location,`<h3>${location[0]}</h3>`+location[1]+ '<br>' + `<a href="${location[2]}" target="_blank">${location[2]}</a>`);
      }
      else
      {
        alert("some problem in geocode" + status);
      }
    }); 
  }

  function createMarker(latlng,html){    
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: '/img/poppy-marker-8-50x50.png',
    }); 

    marker.addListener("click", () => {
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
  }
};

