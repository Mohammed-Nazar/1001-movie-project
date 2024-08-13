import React from 'react'
import MainSlider from './components/MainSlider'

const Main = ({data, genres}) => {
  return (
    <div className='relative w-full mt-10 min-h-full'>
        <MainSlider data={data} genres={genres}/>
    </div>
  )
}

export default Main