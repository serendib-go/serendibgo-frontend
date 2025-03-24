import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

// Sri Lanka's coordinates for centering the map
const sriLankaCenter = { lat: 7.8731, lng: 80.7718 };

const places = [
  {
    id: 1,
    name: "Colombo Lotus Tower",
    latitude: 6.9271,
    longitude: 79.8612,
    description: "The tallest self-supported structure in South Asia, offering a panoramic view of Colombo.",
  },
  {
    id: 2,
    name: "Sigiriya Rock Fortress",
    latitude: 7.9569,
    longitude: 80.7593,
    description: "A UNESCO World Heritage Site, known for its ancient rock fortress and stunning frescoes.",
  },
  {
    id: 3,
    name: "Galle Fort",
    latitude: 6.026,
    longitude: 80.217,
    description: "A well-preserved colonial-era fort built by the Portuguese and later fortified by the Dutch.",
  },
  // Add more places...
];

const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  }
];

const App = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    // Any logic when the component mounts, if required
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAGbmtKrp8gg_PPgBs4ukG9sFm2ZVx_QtI">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "500px" }}
        center={sriLankaCenter}
        zoom={1}
        options={{
          maxBounds: {
            north: 10.1, // Top-right latitude
            south: 5.8, // Bottom-left latitude
            east: 82.5,  // Top-right longitude
            west: 79.5,  // Bottom-left longitude
          },
          restriction: {
            latLngBounds: {
              north: 10.1,
              south: 5.8,
              east: 82.5,
              west: 79.5,
            },
            strictBounds: true,
          },
          styles: mapStyles, // Apply custom styles
        }}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            position={{ lat: place.latitude, lng: place.longitude }}
            onClick={() => setSelectedPlace(place)}
          />
        ))}
        {selectedPlace && (
          <InfoWindow
            position={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
