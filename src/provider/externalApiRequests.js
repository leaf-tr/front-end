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
    let title = ""
    let authors = ""
    let categories = ""
    let imgUrl = ""
    let publishedDate = ""
    let publisher = ""
    let description = ""
    let pageCount = ""

    try {
      title = volumeInfo.title
      authors = volumeInfo.authors
      categories = volumeInfo.categories
      imgUrl = volumeInfo.imageLinks.smallThumbnail
      publishedDate = volumeInfo.publishedDate
      publisher = volumeInfo.publisher
      description = volumeInfo.description
      pageCount = volumeInfo.pageCount
      isbn = isbn
    } catch (e) {
      console.log("API did not return all of the data")
    }

    const bookData = {
      "title": title,
      "authors": authors,
      "genres": categories,
      "imgUrl": imgUrl,
      "publishedDate": publishedDate,
      "publisher": publisher,
      "description": description,
      "pageCount": pageCount,
      "isbn": isbn,
    }

    console.log("JSON", bookData)
    return bookData

  } catch (e) {
    console.log(e)
  }
}