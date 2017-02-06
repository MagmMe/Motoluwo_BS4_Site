(function(){


// Magme Hero Smooth Scroll and Regulamin Site smooth scroll
         $('#start').on('click', function(e){
            e.preventDefault();
            var target= $('.end');
            $('html, body').stop().animate({
               scrollTop: target.offset().top - 450
            }, 1000);
        });

		$('.intro-button').on('click', function(e){
		    e.preventDefault();
		    var target= $('.target-scroll');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top - 50
		    }, 1000);
		});





		 function init_map() {

            var var_location = new google.maps.LatLng(40.725118, -73.997699);

            var var_mapoptions = {
                center: var_location,

                zoom: 14
            };

            var var_marker = new google.maps.Marker({
                position: var_location,
                map: var_map,
                title: "New York"
            });

            var var_map = new google.maps.Map(document.getElementById("map-container"),
                var_mapoptions);

            var_marker.setMap(var_map);

        }

        google.maps.event.addDomListener(window, 'load', init_map);


}(jQuery));