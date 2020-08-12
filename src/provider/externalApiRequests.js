import axios from 'axios'
import parser from 'fast-xml-parser'

const GOODREADS = {
  BaseURL: 'https://www.goodreads.com',
  SearchURL: 'search/index.xml',
  DevKey: process.env.REACT_APP_GOODREADS_KEY,
}

const GOOGLEBOOKS = {
  BaseURL: 'https://www.googleapis.com/books/v1',
  DevKey: process.env.REACT_APP_GOOGLEBOOKS_KEY,
}

export const getBookDataByIsbn = async (isbn) => {
  // response.data.items[0].id
  const requestURL = `https://cors-anywhere.herokuapp.com/${GOOGLEBOOKS.BaseURL}/volumes?q=isbn:${isbn}&key=${GOOGLEBOOKS.DevKey}`
  
  try {
    const response = await axios.get(requestURL, {
      headers: {
        'Content-type': 'application/json'
      }
    })
    
    const volumeInfo = response.data.items[0].volumeInfo

    const bookData = {
      "title": volumeInfo.title,
      "authors": volumeInfo.authors,
      "genres": volumeInfo.categories,
      "imgUrl": volumeInfo.imageLinks.smallThumbnail,
      "publishedDate": volumeInfo.publishedDate,
      "publisher": volumeInfo.publisher,
      "description": volumeInfo.description,
      "pageCount": volumeInfo.pageCount,
      "isbn": isbn,
    }

    console.log("JSON", bookData)
    return bookData

  } catch (e) {
    console.log(e)
  }
}