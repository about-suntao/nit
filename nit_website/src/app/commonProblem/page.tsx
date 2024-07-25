import React from 'react'
import Banner from '@/components/banner/banner'
import QAndA from './QAndA/QAndA'
import Course from './course/course'
function Page() {
  return (
    <>
      <Banner id={4}></Banner>
      <QAndA></QAndA>
      <Course></Course>
    </>
  )
}

export default Page
