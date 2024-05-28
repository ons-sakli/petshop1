import React, { useState, useEffect } from "react";

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0] ? images[0] : null);
console.log(mainImage)
  // Handle potential empty image array
  useEffect(() => {
    if (images.length === 0) {
      setMainImage(null);
    } else {
      setMainImage(images[0]);
    }
  }, [images]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  

  return (
    
    <div>
           
    

        
      {mainImage && (
        <img
          src={mainImage.image} // Assuming 'image' is the property name for the image URL
          alt=""
          className="h-[600px] w-full block rounded object-contain"
        />
        
      )}
      
 
      <div className="mt-8 grid grid-cols-5 gap-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            
            src={ image.image}
            alt=""
            onClick={() => handleImageClick(image)}
            className={`h-12 lg:h-20 w-full block rounded object-contain cursor-pointer ${
              mainImage?.image === image.image ? "border-2 border-solid border-secondary-200" : ""
            }`}
          />
        ))}
      </div>
      
     
    </div>
    
  );
};

export default ProductImages;
