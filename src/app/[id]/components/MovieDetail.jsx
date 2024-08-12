import React from 'react'

const MovieDetail = ({details}) => {
  return (
    <div className='my-10'>
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-white">Overview</h1>
          <p className="text-white mt-2">{details.overview}</p>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-white">Runtime</h1>
          <p className="text-white mt-2">
            {Math.floor(details.runtime / 60)} hr
            <span> {details.runtime % 60} min </span>
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-white">Status</h1>
          <p className="text-white mt-2">{details.status}</p>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-white">Genres</h1>
          <ul className="flex mt-2">
            {details.genres.map((genre) => (
              <li
                key={genre.id}
                className="text-[#d2d2d2] text-sm font-semibold font-mono backdrop-blur-[1.2px] px-1 py-1 mr-1 mt-1 rounded-md"
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default MovieDetail