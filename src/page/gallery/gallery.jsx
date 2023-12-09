import React from "react";
import Background from "../../components/gallery/section1/section1";
import GalleryPhoto from "../../components/gallery/section2/GalleryPhoto";

const Gallery = () => {
  return (
    <main className="gallery">
      <Background />
      <GalleryPhoto />
    </main>
  );
};

export default Gallery;
