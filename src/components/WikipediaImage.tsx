// WikipediaImage.tsx
import React, { useEffect, useState } from 'react';
import placeholder from '../assets/animal-placeholder.png';
import axios from 'axios';

interface WikipediaImageProps {
  animalQuery: string;
  animalDetails: object | null;
  isLoading: boolean;
}

const WikipediaImage: React.FC<WikipediaImageProps> = ({ animalQuery, animalDetails, isLoading }) => {
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
    <section className="section section--animal-image">
      <div className="animal-image">
        {animalDetails && !imageUrl && <span>No image available</span>}
        <img src={imageUrl && animalDetails && !isLoading ? imageUrl : placeholder} className={imageUrl && animalDetails && !isLoading ? '' : 'placeholder'} alt="Wikipedia" style={{ maxWidth: '100%' }} />
      </div>
    </section>
  );
};

export default WikipediaImage;
