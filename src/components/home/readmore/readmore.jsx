import React, { useState } from 'react';

const ReadMoreContent = ({ initialContent, expandedContent }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='readmore'>
      {expanded ? expandedContent : initialContent}
      <button onClick={toggleContent}>
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ReadMoreContent;
