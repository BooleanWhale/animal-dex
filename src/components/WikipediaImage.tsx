// WikipediaImage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WikipediaImageProps {
  animalQuery: string;
}

const WikipediaImage: React.FC<WikipediaImageProps> = ({ animalQuery }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&titles=${animalQuery}&pithumbsize=500&redirects=true&origin=*`;
        const response = await axios.get(apiUrl);

        const imageSource = response.data?.query?.pages?.[0]?.thumbnail?.source || null;
        setImageUrl(imageSource);
      } catch (error) {
        console.error('Error fetching Wikipedia image:', error);
      }
    };

    if (animalQuery.trim() !== '') {
      fetchImage();
    }
  }, [animalQuery]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Wikipedia" style={{ maxWidth: '100%' }} />
      ) : (
        <p>No image found</p>
      )}
    </div>
  );
};

export default WikipediaImage;
