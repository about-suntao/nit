import React from 'react'
import Banner from '@/components/banner/banner'
import Daily from './daily/daily'
import Teaching from './teaching/teaching'

function Education() {
  return (
    <>
      <Banner id={7}></Banner>
      <Daily></Daily>
      <Teaching></Teaching>
    </>
  )
}

export default Education
