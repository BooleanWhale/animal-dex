import axios from "axios";

export default axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/animals',
  headers: {
    'X-Api-Key': 'D0U5me5Ml8kGsRRMWhOipA==ZAX0IXUHrf9nxkWb',
  },
})