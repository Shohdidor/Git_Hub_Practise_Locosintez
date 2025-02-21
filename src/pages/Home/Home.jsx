import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const value = useSelector((store)=> store.counter.value)
  return (
    <>
    </>
  )
}

export default Home