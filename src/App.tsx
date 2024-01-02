// efwef
import React, { useEffect, useState } from 'react';
import './App.css';
import AnimalQueryForm from './components/AnimalQueryForm';
import useAnimalData from './hooks/useAnimalData';
import WikipediaImage from './components/WikipediaImage';
import AnimalDetails from './components/AnimalDetails';
import AnimalGrid from './components/AnimalGrid';
import StateIndicator from './components/StateIndicator';

function App() {
  const [animalQuery, setAnimalQuery] = useState<string>('');
  const [animalDetails, setAnimalDetails] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false); 
  const [currentState, setCurrentState] = useState<string>('initial');
  const { animalData, fetchData } = useAnimalData();

  useEffect(() => {
    // Log the data when it is available
    if (animalData) {
      console.log('Animal Data:', animalData);
      if (animalData.length > 1) {
        console.log('Multiple entries');
        setAnimalDetails(null); // Set to null when there are multiple entries
      } else if (animalData.length === 1) {
        console.log('Single entry');
        setAnimalDetails(animalData[0]); // Set to the single entry
      } else {
        setAnimalDetails(null);
      }
      setIsLoading(false);
    }
  }, [animalData]);

  useEffect(() => {
    setCurrentState(
      isLoading ? 'loading' :
      animalDetails ? 'details' :
      animalData.length > 1 ? 'results' :
      searchPerformed ? 'no-results' :
      'initial'
    );
  }, [animalData, animalDetails, isLoading, searchPerformed]);

  return (
    <>
      <StateIndicator currentState={currentState} />
      <WikipediaImage animalQuery={animalQuery} animalDetails={animalDetails} isLoading={isLoading} />
      {isLoading && <h1>LOADING...</h1>}
      {currentState === 'no-results' && <h2>No results.</h2>}
      <AnimalQueryForm animalQuery={animalQuery} setAnimalQuery={setAnimalQuery} fetchData={fetchData} setIsLoading={setIsLoading} setSearchPerformed={setSearchPerformed}/>
      {animalData && animalData.length > 1 && !animalDetails && (
        <AnimalGrid animalData={animalData} setAnimalQuery={setAnimalQuery} setAnimalDetails={setAnimalDetails} />
      )}
      {animalDetails && !isLoading && (
        <>
          <AnimalDetails animalDetails={animalDetails} animalQuery={animalQuery} />
        </>
      )}
    </>
  );
}

export default App;
