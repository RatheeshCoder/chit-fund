import React from "react";

const MapComponent = () => {
  return (
    <div
      id="map"
      className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7545.648221854052!2d76.97305096154211!3d10.9948436012557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f0fef453c38a6a3%3A0xe1b7c879c8f85b23!2sVanmoh%20Chit%20Funds%20Private%20Limited!5e0!3m2!1sen!2sin!4v1699381686114!5m2!1sen!2sin"
        width="100%"
        height="1080"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
