"use client";

import { GoogleMapProps } from "@/lib/types";

const GoogleMap = ({
  address,
  height,
  className = "",
  apiKey,
  title = "Localização da Igreja",
}: GoogleMapProps) => {
  const encodedAddress = encodeURIComponent(address);

  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`
    : `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className={`rounded-lg overflow-hidden shadow-xl ${className}`}>
      <iframe
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        title={title}
        className="w-full"
      />
    </div>
  );
};

export default GoogleMap;

