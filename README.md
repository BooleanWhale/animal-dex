# AnimalDex
## Overview
AnimalDex is a simple React application that provides information about animals using external APIs. It leverages the API Ninjas Animals API for basic details and the Wikipedia API for additional information.
Tech Stack
- React: Front-end library for building user interfaces.
- API Ninjas Animals API: Provides animal-related data.
- Wikipedia API: Used for fetching additional details.

## How It Works
- Users input an animal name via the search form.
- AnimalDex fetches data from the API Ninjas Animals API.
- The application displays details about the specified animal.

## TODO
- Add custom search options in JS object
- Move custom search options into seperate JSON file
- Make image visible at all times
- Change image logic to use a state for the image URL
- Add placeholder image when image URL === ''
- Add images for custom search options
- Style layout with CSS grid
- Style app with Pokedex theme
- Updated Lifespan disclaimer to be (!) popup
- Move lifespan details to seperate JSON file
- Add manual redirects (eg orca -> killer whale)