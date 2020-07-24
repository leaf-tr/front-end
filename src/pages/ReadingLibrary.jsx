import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getReadingLibrary } from '../provider/apiRequests'


export default function ReadingLibrary() {

  const [readingItems, setReadingItems] = useState({})

  const fetchReadingLibrary = async (userId) => {
    setReadingItems(await getReadingLibrary(userId))
  };

  // fetch api for reading library on component load
  useEffect(() => {
    const userId = "dhjfhsdj"
    fetchReadingLibrary(userId)
  }, [])

  console.log(readingItems)
  return (
    <div className="flex m-6">
      {
        Object.values(readingItems).map((item, id) => (
          <Link key={`${item.isbn}`} to={`item/${item.isbn}`}>
            <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
              <img className="w-48" src={`${item.imgUrl}`} alt="item cover" />
            </div>
          </Link>
        ))
      }
    </div>
  )
}