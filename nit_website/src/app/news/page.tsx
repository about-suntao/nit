import React from 'react'
import Banner from '@/components/banner/banner'
import NewsList from './newsList/newsList'

function Page() {
  return (
    <>
      <Banner id={5}></Banner>
      <NewsList></NewsList>
    </>
  )
}

export default Page
