import React from 'react'

const Background = () => {
  return (

    <div className="wrap">
      <div id="slider">
        {gallaryImg.map((img, index) => (
          <div
            key={img.id}
            className={`slide slide${index + 1}`}
            style={{
              display: index === current ? 'block' : 'none',
              textAlign: 'center',
            }}
          >
            <div className="slide-content" style={{ display: 'inline-block' }}>
              <img
                src={img.url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

    <section className='cta-gallery-bg'>
      
    </section>
  )
}


export default Background
