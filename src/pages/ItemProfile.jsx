import React, {useEffect, useState} from 'react'

import BookData from '../components/ItemsProfiles/BookData'
// future: import JournalData from '../components/ItemsProfiles/JournalData'

import DropDown from '../components/DropDown'
import FlexBox from '../components/FlexBox'

// import object of reading progress options
import { ReadingProgress } from '../provider/constants'

export default function ItemProfile(id) {

  const [bookData, setBookData] = useState({})

  // on component mount fetch goodreads API
  // by book's ISBN given in the URL param as an id
  useEffect(() => {
    //
  }, [])


  return (
    <FlexBox className="mt-12">
      {/* left col w/ image, rating, and reading progress */}
      <FlexBox direction="col">
        <img src="" alt="" />
        {/* <Rating></Rating> */}
        <DropDown options={Object.values(ReadingProgress)} />
      </FlexBox>
        {/* right col w/ metadata */}
        <div className="flex-grow">
          <BookData data={bookData} />
        </div>
    </FlexBox> 
  )
} 

