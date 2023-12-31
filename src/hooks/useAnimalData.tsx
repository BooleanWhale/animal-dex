// useAnimalData.ts
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client'; // Adjust the path as needed

interface AnimalData {
  name: string;
}

const useAnimalData = () => {
  const [animalData, setAnimalData] = useState<AnimalData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (name: string) => {
    try {
      setLoading(true);
      const response = await apiClient.get('', {
        params: { name },
      });

      setAnimalData(response.data);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return { animalData, loading, error, fetchData };
};

export default useAnimalData;
