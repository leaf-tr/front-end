import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { XMasonry, XBlock } from 'react-xmasonry'

import { getReadingLibrary } from '../provider/apiRequests'
import { UserContainer } from '../provider/containers'

import PageWrapper from '../components/PageWrapper'

export default function ReadingLibrary() {

  const [apiRequestLoadingStatus, setApiRequestLoadingStatus] = useState({ loading: false })
  const [readingItems, setReadingItems] = useState([])
  const container = UserContainer.useContainer()

  const { userData } = container

  // fetch api for reading library on component load
  useEffect(() => {
    const fetchReadingLibrary = async (userId) => {
      console.log("call getReadingLibrary(userId)")
      
      
      const data = await getReadingLibrary(userId)
      
      setReadingItems(data)
      setApiRequestLoadingStatus({ loading: false})
    };
    
    console.log("USER data", userData)

    setApiRequestLoadingStatus({ loading: true })
    fetchReadingLibrary(userData.id)
  }, [userData])


  // add a button to manually sync Goodreads API
  // send a GET to api/users/{id}/sync/{goodreads}
  console.log(readingItems)
  return (
    <PageWrapper className="mt-10">
      <div className="grid grid-cols-6 gap-4">
        { readingItems &&
          Object.values(readingItems).map(item => (
            // console.log("item", item.book.isbn),
              <Link key={`${item.id}`} to={`/reading-library/${item.book.isbn13}`}>
                <div className="m-4 rounded overflow-hidden shadow-lg cursor-pointer">
                  <img className="w-48" src={`${item.book.image_url}`} alt="item cover" />
                </div>
              </Link>
          ))
        }
      </div>
    </PageWrapper>
  )
}