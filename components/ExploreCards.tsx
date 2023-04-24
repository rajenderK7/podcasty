import React from 'react'

export interface ExploreCardProps {
    genreTitle: string,
    color: string,
}

function ExploreCards({ genreTitle, color }: ExploreCardProps) {
    return (
        <div className='p-2'>
            <div className={`container ${color} w-[150px] h-[150px] mx-auto p-4 space-x-4 transform overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-lg`}>
                <h2 className="mb-2 text-lg text-white font-bold dark:text-white text-gray-900">{genreTitle}</h2>
            </div>
        </div>
    )
}

export default ExploreCards
