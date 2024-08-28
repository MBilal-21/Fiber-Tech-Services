"use client";
// components/Map.js

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Add your API key here
  });

  const center = useMemo(() => ({ lat: 40.7128, lng: -74.0060 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ width: "100%", height: "400px" }} // Full-width map
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
