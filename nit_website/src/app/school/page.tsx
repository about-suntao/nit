import React from 'react'
import Banner from '@/components/banner/banner'
import Introduce from './introduce/introduce'
import Environment from './environment/environment'


function School() {
  return (
    <>
      <Banner id={1}></Banner>
      <Introduce></Introduce>
      <Environment></Environment>
    </>
  )
}

export default School
