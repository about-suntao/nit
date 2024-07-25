import React from 'react'
import Banner from '@/components/banner/banner'
import About from './about/about'
import Features from './features/features'
function Page() {
  return (
    <>
      <Banner id={2}></Banner>
      <About></About>
      <Features></Features>
    </>
  )
}

export default Page
