import React, {useEffect, useState} from 'react'

import BookData from '../components/ItemsProfiles/BookData'
// future: import JournalData from '../components/ItemsProfiles/JournalData'

import DropDown from '../components/DropDown'
import FlexBox from '../components/FlexBox'

// import object of reading progress options
import { ReadingProgress } from '../provider/constants'

import { getBookDataByIsbn } from '../provider/externalApiRequests'

export default function ItemProfile({ id }) {

  const [bookData, setBookData] = useState({})

  // on component mount fetch goodreads API
  // by book's ISBN given in the URL param as an id
  useEffect(() => {
    fetchBookByIsbn(id)
  }, [])

  const fetchBookByIsbn = async (id) => {
    let retrievedData = await getBookDataByIsbn(id)
    setBookData(retrievedData)
    console.log("BOOK DATA FROM GOODREADS", retrievedData)
  }

  return (
    <FlexBox className="mt-20 mx-auto">
      {/* left col w/ image, rating, and reading progress */}
      <FlexBox direction="col">
        <img src={bookData.imgUrl} alt="" />
        {/* <Rating></Rating> */}
        <DropDown options={Object.values(ReadingProgress)} />
      </FlexBox>
        {/* right col w/ metadata */}
        <div className="flex-grow">
          { Object.values(bookData).length &&
            <BookData data={bookData} />
          }
        </div>
    </FlexBox> 
  )
} 

