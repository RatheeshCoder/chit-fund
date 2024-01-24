import React, { useState } from 'react';
import ImageModal from './ImageModal';
import photoData from '../../../data/data';
// import './YourStylesheet.css'; // Import your stylesheet

const GalleryPhoto = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedImage(null); // Reset selected image when changing the category
    setActiveCategory(category); // Update active category
  };

  const handleImageClick = (imageUrl, event) => {
    event.stopPropagation(); // Stop event propagation to prevent multiple modals from opening
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;

    const currentIndex = photoData.findIndex((photo) => photo.url === selectedImage);
    const prevIndex = (currentIndex - 1 + photoData.length) % photoData.length;
    setSelectedImage(photoData[prevIndex].url);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;

    const currentIndex = photoData.findIndex((photo) => photo.url === selectedImage);
    const nextIndex = (currentIndex + 1) % photoData.length;
    setSelectedImage(photoData[nextIndex].url);
  };

  const filteredPhotos = selectedCategory
    ? photoData.filter((photo) => photo.category === selectedCategory)
    : photoData;

  return (
    <div>
       <div className="my-10 text-transparent caption bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-black">
      <h2 className='text-3xl font-bold tracking-tight font-display lg:text-5xl md:text-3xl'>Be A Part Of Our Joy Faces You See! Moments With Our Financial Geeks</h2>
    </div>
      <div className="filter-options">
        <button
          onClick={() => handleCategoryClick(null)}
          className={activeCategory === null ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('CustomerMeetups')}
          className={activeCategory === 'CustomerMeetups' ? 'active' : ''}
        >
           Customer Interactions
        </button>
        <button
          onClick={() => handleCategoryClick('FestivalCelebrations')}
          className={activeCategory === 'FestivalCelebrations' ? 'active' : ''}
        >
          Pongal Celebration
        </button>
        <button
          onClick={() => handleCategoryClick('anniversary')}
          className={activeCategory === 'anniversary' ? 'active' : ''}
        >
          3rd Anniversary
        </button>
        {/* Add more buttons for other categories as needed */}
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <div data-aos="zoom-out"
            key={photo.id}
            className="relative cursor-pointer group"
            onClick={(event) => handleImageClick(photo.url, event)}
          >
            <img loading='lazy'
              src={photo.url}
              alt={`Image ${photo.id}`}
              className="object-cover w-full h-48 transition-transform transform scale-100 rounded-lg group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
              <button className="px-4 py-2 text-gray-800 transition-colors bg-white rounded-lg hover:bg-gray-200">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
};

export default GalleryPhoto;
