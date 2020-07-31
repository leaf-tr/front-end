import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/'

export const APIPath = {
  Users: 'users',
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
  // http://localhost:5000/api/ users / :userId / reading-library
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

export const authenticateUser = async (userData) => {
  // http://localhost:5000/api/ users
  const requestURL = `${API_URL}/${APIPath.Users}/${userData.id}`
  try {
    const response = await axios.post(requestURL, {
      family_name: userData.family_name,
      given_name: userData.given_name,
      picture: userData.picture,
    }, {
        headers: {
          'Content-Type': ContentType.JSON
      }
    })
  } catch (e) {
    console.log(e)
  }
}