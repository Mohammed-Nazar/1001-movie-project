import React from 'react'
import MainSlider from './components/MainSlider'

const Main = ({data, genres}) => {
  return (
    <div className='pt-10 mx-10 w-6/12 ml-60 mt-2'>
    <div className='relative w-[100%] mx-8'>
        <MainSlider data={data} genres={genres}/>
    </div>
    </div>
  )
}

export default Main