import React from 'react'

import FlexBox from '../FlexBox'
import Paragraph from '../Paragraph'
import TextBlock from './TextBlock'

export default function BookData({ data }) {

  return (
    <FlexBox direction="col" className="ml-10 -mt-4">
      <Paragraph size="4xl" weight="bold">
        {data.title}
      </Paragraph>

      <Paragraph size="2xl">
        {data.authors[0]}
      </Paragraph>

      {/* genres */}
      { data && data.genres &&
        data.genres.map((genre, id) => (
          <Paragraph key={id} className="mt-2" size="lg">{genre}</Paragraph>
        ))
      }
      
      <TextBlock textElements={[
        {
          label: 'Date Published: ',
          content: data.publishedDate
        },
        {
          label: 'Publisher: ',
          content: data.publisher
        },
        {
          label: 'ISBN: ',
          content: data.isbn
        }
      ]} />

      <TextBlock textElements={[
        {
          label: 'Page Count: ',
          content: data.pageCount
        }
      ]} />
      
      {/* date Started, date Finished from user library
      <div className="mt-4">
        <Paragraph size="sm">
          date Started:
          {data.}
        </Paragraph>
        <Paragraph size="sm">
          date Finished:
          {data.}
        </Paragraph>
      </div> */}

    </FlexBox> 
  )
} 