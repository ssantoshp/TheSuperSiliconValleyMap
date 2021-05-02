function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 37.41169475245951,
			lng: -122.05548223838848,
		},
		zoom: 12,
		mapId: '3499e7b5d72b4fe',
	});

    const markers = [
		[
			"Tesla",
			37.402114072769894,
			-122.11408504047343,
			'assets/tesla.png',
			50,
			50,
            
         
		],
		[
			'You Are Here',
			37.322114072769894,
			-122.08409302047343,
			'assets/pointer.svg',
			50,
			50,
		],
        [
			'Intel',
			37.40111265381338,
            -121.93551667250343,
			'assets/intel.png',
			50,
			45,
         
		],
        [
			'Airbnb',
			37.76171943577517, 
            -122.40537623132253,
			'assets/airbnb.png',
			100,
			30,
         
		],
        [
			'Salesforce',
			37.79986733345304, 
            -122.39690266083886,
			'assets/sales.png',
			60,
			45,
         
		],
      
        [
			'HP',
			37.414758182199016,
            -122.14638598311048,
			'assets/hp.png',
			50,
			50,
         
		],
        [
			'Pinterest',
			37.77788300973486, 
            -122.39690640178195,
			'assets/pin.png',
			70,
			50,
         
		],
        [
			'Visa',
			37.793774717649725,
            -122.40462947425568,
			'assets/visa.png',
			50,
			20,
            
		],
        [
			'Google',
			37.422078893314286, 
            -122.08408836068601,
			'assets/google.png',
			100,
			40,
            
		],
        [
			'Youtube',
			37.6279387565884, 
            -122.42653600178566,
			'assets/ytb.png',
			50,
		    35,
            
		],
        [
			'Dropbox',
			37.78107041438844, 
            -122.39269618842624,
			'assets/dropbox.png',
			75,
		    25,
            
		],
        [
			'Twitter',
			37.776479609946435, 
            -122.41720241343882,
			'assets/twitter.png',
			50,
			50,
            
		],
        [
			'Hulu',
			37.78858195833652, 
            -122.401371919885,
			'assets/hulu.png',
			50,
			20,
            
		],
        [
			'Yahoo',
			37.417173813635486,
			-122.0250052434197,
			'assets/yahoo.png',
			80,
			30,
            
		],
		[
			'Uber',
			37.77569299880041,
			-122.41797342818941,
			'assets/uber.png',
			50,
			20,
		],

		['PayPal', 37.37642483359995, -121.9224816018824, 'assets/paypal.png', 70, 60],
		['Warp Pipe', 37.52739738978135, -122.1409604047343, 'assets/pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, 'assets/star.svg', 38, 38],
		[
			'Donut Plains',
			37.362114072769894,
			-122.09096040473431,
			'assets/hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Apple',
			37.33199651048826,
			-122.03089429636101,
			'assets/apple.svg',
			40,
			50,
            
		],
        [
			'Oracle',
			37.39548685009004, 
            -121.96381903598964,
			'assets/oracle.png',
			65,
			90,
            
		],
        [
			'Facebook',
			37.48508510747482,
			-122.14828144072919,
			'assets/fb.png',
			40,
			45,
           
		],
        [
			'LinkedIn',
			37.392637967557185,
			-122.0407287901345,
			'assets/linkedin.png',
			40,
			45,
           
		],
		[
			'Netflix',
			37.259582057499436,
			-121.96269567243688,
			'assets/netflix.png',
			65,
			50,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}


