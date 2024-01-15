import React from 'react';

interface AnimalDetails {
  name: string;
}

interface Props {
  animalDetails: AnimalDetails | null;
}

const AnimalDetails = ({ animalDetails }:Props) => {
  const animalLifespans = {
    'Clownfish': 'Clownfish have been known to live over 40 years in captivity',
    'Killer Whale': 'Killer Whales have a maximum lifespan 80-100 years in the wild'
  };
  
  const lifespanDisclaimer = `. (Estimated lifespans can be subject to predation, competition for resources and other environmental factors.${animalLifespans[animalDetails.name] ? ` ${animalLifespans[animalDetails.name]}` : ''})`;  

  const renderContent = (obj: object) => {
    return Object.entries(obj).map(([key, value]) => (
      <React.Fragment key={key}>
        {key !== 'name' && (
          <>
            {typeof value === 'object' ? (
              <div className="details" id={`details-${key}`}>
                <p><b>{key.replace(/_/g, ' ')}</b></p>
                {renderContent(value)}
              </div>
            ) : (
              <p id={`details-${key}`}>
                {!isNaN(Number(key)) ? '' : <span>{`${key.replace(/_/g, ' ') + ': '}`}</span>}{value}
                {key === 'lifespan' && <span>{lifespanDisclaimer}</span>}
              </p>
            )}
          </>
        )}
      </React.Fragment>
    ));
  };
  
  return (
    <section className="section--details">
      <div className="animal-name page-width">
        <h1 className="animal-name__title">{animalDetails.name}</h1>
      </div>
      <div className='page-width'>
        <div className="details-container scanline-bg">
          {renderContent(animalDetails)}
        </div>
      </div>
    </section>
  );
};

export default AnimalDetails;


// <div>
//   <p></p>
//   <div>
//     <p>name: Clownfish</p>
//   </div>
//   <div>
//     <p><b>taxonomy</b></p>
//     <div>
//       <p>kingdom: Animalia</p>
//     </div>
//     <div>
//       <p>phylum: Chordata</p>
//     </div>
//     <div>
//       <p>class: Actinopterygii</p>
//     </div>
//     <div>
//       <p>order: Perciformes</p>
//     </div>
//     <div>
//       <p>family: Pomacentridae</p>
//     </div>
//     <div>
//       <p>genus: Amphiprion</p>
//     </div>
//   </div>
//   <div>
//     <p><b>locations</b></p>
//     <div>
//       <p>0: Ocean</p>
//     </div>
//   </div>
//   <div>
//     <p><b>characteristics</b></p>
//     <div>
//       <p>main_prey: Zooplankton, phytoplankton</p>
//     </div>
//     <div>
//       <p>group_behavior: School</p>
//     </div>
//     <div>
//       <p>biggest_threat: Destruction of coral reef habitats</p>
//     </div>
//     <div>
//       <p>distinctive_feature: Coloring and three wide, white bands</p>
//     </div>
//     <div>
//       <p>other_name(s): Anemonefish, false clownfish, false percula</p>
//     </div>
//     <div>
//       <p>gestation_period: 6 to 8 days</p>
//     </div>
//     <div>
//       <p>water_type: Salt</p>
//     </div>
//     <div>
//       <p>optimum_ph_level: 7.9 - 8.4</p>
//     </div>
//     <div>
//       <p>habitat: Tropical coral reefs</p>
//     </div>
//     <div>
//       <p>predators: Larger fish</p>
//     </div>
//     <div>
//       <p>diet: Omnivore</p>
//     </div>
//     <div>
//       <p>favorite_food: Algae</p>
//     </div>
//     <div>
//       <p>type: Fish</p>
//     </div>
//     <div>
//       <p>common_name: Clownfish</p>
//     </div>
//     <div>
//       <p>number_of_species: 27</p>
//     </div>
//     <div>
//       <p>average_clutch_size: 2000</p>
//     </div>
//     <div>
//       <p>slogan: Also known as the anemonefish!</p>
//     </div>
//     <div>
//       <p>color: YellowRedBlackWhiteOrange</p>
//     </div>
//     <div>
//       <p>skin_type: Scales</p>
//     </div>
//     <div>
//       <p>lifespan: 6 to 10 years</p>
//     </div>
//     <div>
//       <p>weight: 250 grams</p>
//     </div>
//     <div>
//       <p>length: 10cm - 18cm (4in - 7in)</p>
//     </div>
//   </div>
// </div>

// <div>
//   <p></p>
//   <div>
//     <p>name: Clownfish</p>
//   </div>
//   <div>
//     <p><b>taxonomy</b></p>
//     <div>
//       <p>kingdom: Animalia</p>
//       <p>phylum: Chordata</p>
//       <p>class: Actinopterygii</p>
//       <p>order: Perciformes</p>
//       <p>family: Pomacentridae</p>
//       <p>genus: Amphiprion</p>
//     </div>
//   </div>
//   <div>
//     <p><b>locations</b></p>
//     <div>
//       <p>0: Ocean</p>
//     </div>
//   </div>
//   <div>
//     <p><b>characteristics</b></p>
//     <div>
//       <p>main_prey: Zooplankton, phytoplankton</p>
//       <p>group_behavior: School</p>
//       <p>biggest_threat: Destruction of coral reef habitats</p>
//       <p>distinctive_feature: Coloring and three wide, white bands</p>
//       <p>other_name(s): Anemonefish, false clownfish, false percula</p>
//       <p>gestation_period: 6 to 8 days</p>
//       <p>water_type: Salt</p>
//       <p>optimum_ph_level: 7.9 - 8.4</p>
//       <p>habitat: Tropical coral reefs</p>
//       <p>predators: Larger fish</p>
//       <p>diet: Omnivore</p>
//       <p>favorite_food: Algae</p>
//       <p>type: Fish</p>
//       <p>common_name: Clownfish</p>
//       <p>number_of_species: 27</p>
//       <p>average_clutch_size: 2000</p>
//       <p>slogan: Also known as the anemonefish!</p>
//       <p>color: YellowRedBlackWhiteOrange</p>
//       <p>skin_type: Scales</p>
//       <p>lifespan: 6 to 10 years</p>
//       <p>weight: 250 grams</p>
//       <p>length: 10cm - 18cm (4in - 7in)</p>
//     </div>
//   </div>
// </div>