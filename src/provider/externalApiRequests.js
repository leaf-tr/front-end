import axios from 'axios'
import parser from 'fast-xml-parser'



export const getBookDataByIsbn = async (isbn) => {
  console.log(parser)
  console.log("id", isbn)
  console.log("key", process.env)
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
    // let jsonResponse = parser.parse(xmlResponse.data)
    // let parsedData = jsonResponse.GoodreadsResponse.search.results
    return bookData

  } catch (e) {
    console.log(e)
  }

  // const requestURL = `https://cors-anywhere.herokuapp.com/${GOODREADS.BaseURL}/${GOODREADS.SearchURL}?q=${isbn}&key=${GOODREADS.DevKey}`
  
  // try {
  //   const xmlResponse = await axios.get(requestURL, {
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   })

  //   console.log("XML", xmlResponse)
  //   let jsonResponse = parser.parse(xmlResponse.data)
  //   let parsedData = jsonResponse.GoodreadsResponse.search.results
  //   return parsedData

  // } catch (e) {
  //   console.log(e)
  // }
}