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
    <div>
      {animalData.map((data) => {
        return (
          <li key={data.name}>
            <button onClick={() => handleButtonClick(data.name)}>
              Name: {data.name}
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default AnimalGrid;
