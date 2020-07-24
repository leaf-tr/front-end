import axios from 'axios';

export const API_URL = 'http://localhost:5000'


export const APIPath = {
  Users: 'api/users',
  ReadingLibrary: 'reading-library'
}

export const RequestType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete"
}

export const ContentType = {
  JSON: 'application/json',
}

export const getReadingLibrary = async (userId) => {
  const requestURL = `${API_URL}/${APIPath.Users}/${userId}/${APIPath.ReadingLibrary}`
  try {
    // GET api/users/{id}/reading-library 
    const response = await axios.get(requestURL)
    
    console.log("Making request", requestURL)
    if (response !== undefined && (response.status === 200 || response.status === 201)) {
      return response.data
    }

  } catch (e) {
    console.log(e)
  }
}