let map;

window.initMap = async () => {

  map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 37.41, lng: -122.12},
    zoom: 11,
    mapId: import.meta.env.MAPID,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      }
    ]
  })


  locations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.long},
      map,
      icon: {
        url: location.iconBig,
        scaledSize: new google.maps.Size(24, 24),
      },
      title: location.title,
      gmpClickable: true
    })


    const infowindow = new google.maps.InfoWindow({
			content: location.title,
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
    
  })
  
}

const locations = [
  {lat: 37.4220, long: -122.0841, iconBig: './icons8-google-100.svg', title: 'Googleplex'},
  {lat: 37.4848, long: -122.1484, iconBig: './icons8-facebook-100.svg', title: 'Meta headquarters'},
  {lat: 37.3349, long: -122.0090, iconBig: './icons8-apple-logo-100.svg', title: 'apple headquarters'},
  {lat: 37.3947, long: -122.1503, iconBig: './icons8-tesla-100.svg', title: 'tesla headquarters'}
];


