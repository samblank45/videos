import axios from 'axios'


const KEY = 'AIzaSyCTZQd8uE4ZlVLRnnJ5EIqoGsLndB79hNM'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    pageToken: 'CAUQAA',
    key: KEY
  }


})