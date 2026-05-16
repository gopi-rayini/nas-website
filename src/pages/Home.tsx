import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // For now, hardcode the images based on the copied files, 
    // or if we had an API we could fetch them. 
    // Since it's in public, we can just reference them.
    setImages([
      '/gallery/20220212_180906.JPG',
      '/gallery/20220505_193929.JPG',
      '/gallery/JAYB2937.JPG',
      '/gallery/XAMY7062.JPG',
      '/gallery/bike.jpeg'
    ]);
  }, []);

  return (
    <div className="page-content">
      <section className="hero">
        <h1 className="title">Welcome</h1>
        <p className="subtitle">My Personal Space</p>
      </section>
      
      <section className="gallery-section">
        <div className="gallery-scroller">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index}`} className="gallery-image" />
          ))}
          {/* Duplicate for infinite scroll effect if there's only one or few */}
          {images.map((src, index) => (
            <img key={`dup-${index}`} src={src} alt={`Gallery duplicate ${index}`} className="gallery-image" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;