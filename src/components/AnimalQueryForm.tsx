import React, { useState, FormEvent, useEffect, useRef } from 'react';

interface Props {
  animalQuery: string;
  setAnimalQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: (name: string) => void;
  setSearchPerformed: (searchPerformed: boolean) => void;
}

function AnimalQueryForm({ animalQuery, setAnimalQuery, setIsLoading, fetchData, setSearchPerformed }: Props) {
  const [inputValue, setInputValue] = useState(animalQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData(inputValue);
    setAnimalQuery(inputValue);
    setIsLoading(true);
    setSearchPerformed(true)
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setInputValue(animalQuery);
  }, [animalQuery]);

  return (
    <div className="query-form">
      <form onSubmit={handleFormSubmit}>
        <label>
          Animal Query:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            ref={inputRef}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AnimalQueryForm;
