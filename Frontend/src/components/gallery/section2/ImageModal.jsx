// ImageModal.js

import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ImageModal = ({ imageUrl, onClose, onPrev, onNext }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Selected" />
        <button className="modal-btn close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
        <button className="modal-btn prev-btn" onClick={onPrev}>
          <ChevronLeftIcon />
        </button>
        <button className="modal-btn next-btn" onClick={onNext}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
