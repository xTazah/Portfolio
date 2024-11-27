import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const MapOverlay = () => {
  const mapContainerRef = useRef(null);
  const mapTilerKey = import.meta.env.VITE_MAPTILER_API_KEY;

  useEffect(() => {
    if (mapContainerRef.current) {
      // Initialize the Map
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: `https://api.maptiler.com/maps/darkmatter/style.json?key=${mapTilerKey}`,
        center: [10, 51], // germany center coordinates
        zoom: 5,
      });

      // Set marker at Gütersloh coordinates [8.3791, 51.9062]
      const marker = new maplibregl.Marker({
        color: "blue",
        scale: 1.5,
      })
        .setLngLat([8.3791, 51.9062])
        .addTo(map);

      // Add a pulsing animation to the marker
      const markerElement = marker.getElement();
      markerElement.classList.add("pulsing-marker");

      // Animate zoom to Gütersloh after a brief moment
      setTimeout(() => {
        map.flyTo({
          center: [8.3791, 51.9062],
          zoom: 12,
          speed: 0.5,
          curve: 1,
          easing: (t) => t,
        });
      }, 1000);

      return () => {
        map.remove();
      };
    }
  }, [mapTilerKey]);

  return (
    <div className="relative h-48 overflow-hidden">
      <div ref={mapContainerRef} className="absolute w-full h-full"></div>
      {/* Add overlay elements as needed */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(transparent,#fafafa)] dark:bg-[linear-gradient(transparent,#0a0a0a)]"></div>
    </div>
  );
};
