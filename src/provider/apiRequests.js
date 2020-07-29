import axios from 'axios';

export const API_URL = 'http://localhost:5000/api'

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
  console.log("request", userData)
  // http://localhost:5000/api/ users
  const requestURL = `${API_URL}/${APIPath.Users}`
  try {
    const response = await axios.post(requestURL, {
      id: userData.user.uid,
      data: {
        firstName: userData.additionalUserInfo.profile.family_name,
        lastName: userData.additionalUserInfo.profile.given_name,
        imgUrl: userData.additionalUserInfo.profile.picture
      }
    }, {
        headers: {
          'Content-Type': ContentType.JSON
      }
    })
    if (response !== undefined && (response.status === 200 || response.status === 201)) {
      return response.data
    }
  } catch (e) {
    console.log(e)
  }
}