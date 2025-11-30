"use client";

import { useEffect, useRef } from "react";

/**
 * A custom Google Map component.
 *
 * Displays a map centered on the Samriddhi project location,
 * with a custom marker and a set of custom map styles.
 *
 * @returns {JSX.Element} The custom Google Map component.
 */
export default function MapCustom() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Ensure window.google is available
    if (!window.google) return;

    const projectLocation = { lat: 28.5297, lng: 77.5020 };

    const map = new window.google.maps.Map(mapRef.current, {
      center: projectLocation,
      zoom: 15,
      disableDefaultUI: false,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#d3c27d" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#e0d3a4" }]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#2c2c2c" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#163f36" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#3c3c3c" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#0a1f29" }]
        },
      ],
    });

    new window.google.maps.Marker({
      position: projectLocation,
      map,
      title: "Samriddhi Daksh Avenue",
      icon: {
        url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        scaledSize: new window.google.maps.Size(40, 40),
      },
    });
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[340px] rounded-xl overflow-hidden shadow-lg"
    ></div>
  );
}
