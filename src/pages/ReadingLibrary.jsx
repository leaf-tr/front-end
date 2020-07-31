import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getReadingLibrary } from '../provider/apiRequests'
import { UserContainer } from '../provider/containers'

export default function ReadingLibrary() {

  let [readingItems, setReadingItems] = useState([])
  const container = UserContainer.useContainer()

  const fetchReadingLibrary = async (userId) => {
    console.log("call getReadingLibrary(userId)")
    setReadingItems = await getReadingLibrary(userId)
  };

  // fetch api for reading library on component load
  useEffect(() => {
    const { userData } = container
    console.log("USER data", userData)
    // fetchReadingLibrary(userData.id)
  }, [])

  // add a button to manually sync Goodreads API
  // send a GET to api/users/{id}/sync/{goodreads}

  
  console.log(readingItems)
  return (
    <div className="flex m-6">
      { readingItems.length > 0 &&
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