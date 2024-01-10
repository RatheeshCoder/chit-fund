import React from "react";
import Background from "../../components/gallery/section1/section1";
import GalleryPhoto from "../../components/gallery/section2/GalleryPhoto";
import { Helmet } from 'react-helmet';

const Gallery = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Gallery</title>
      </Helmet>
    <main className="gallery">
      <Background />
      <GalleryPhoto />
    </main>
    </>
  );
};

export default Gallery;
