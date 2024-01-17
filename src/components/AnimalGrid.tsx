interface AnimalData {
  name: string;
}

interface Props {
  animalData: AnimalData[] | null;
  animalQuery: string;
  setAnimalQuery: (name: string) => void;
  setAnimalDetails: (animal: AnimalData | undefined) => void;
}

const AnimalGrid = ({ animalData, setAnimalDetails, animalQuery, setAnimalQuery }: Props) => {
  const handleButtonClick = (animalName: string) => {
    const selectedObject = animalData?.find((animal) => animal.name === animalName);
    if (animalQuery !== animalName) {
      setAnimalQuery(animalName);
    }
    setAnimalDetails(selectedObject);
  };

  return (
    <div className='page-width'>
      <div className="details-container scanline-bg emboss-large">
        <ul className="search-results list-unstyled">
          {animalData.map((data) => {
            return (
              <li className="search-results__result" key={data.name}>
                <button onClick={() => handleButtonClick(data.name)}>
                  {data.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimalGrid;
