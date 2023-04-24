import ExploreCards from '@/components/ExploreCards'
import React from 'react'

// const titles = ["Romance", "Pop", "Devotional", "Party", "Hip Hop", "Rock"]

const titles1 = [
    {
        genre: "Romance",
        color: "bg-[#6cace7]",
    },
    {
        genre: "Pop",
        color: "bg-[#8b64a1]",
    },
    {
        genre: "Fiction",
        color: "bg-[#65242e]",
    },
    {
        genre: "Politics",
        color: "bg-[#244571]",
    },
    {
        genre: "Drama",
        color: "bg-[#5d9a5f]",
    },
    {
        genre: "Religion",
        color: "bg-[#e39d96]",
    }
]

const titles2 = [
    {
        genre: "Motivation",
        color: "bg-[#eb5e00]",
    },
    {
        genre: "Business",
        color: "bg-[#003399]",
    },
    {
        genre: "Journalism",
        color: "bg-[#228b22]",
    },
    {
        genre: "Thriller",
        color: "bg-[#4b0082]",
    },
    {
        genre: "Suspense",
        color: "bg-[#728fce]",
    },
    {
        genre: "Science",
        color: "bg-[#800080]",
    }
]

function Explore() {
  return (
    <div>
    <div className='w-[80%] container mx-auto flex justify-evenly items-center px-20 mt-6'>
      {titles1.map((title) => {
          return <ExploreCards genreTitle={title.genre} color = {title.color} />;
        })}
    </div>
    <div className='w-[80%] container mx-auto flex justify-evenly items-center px-20 mt-9'>
      {titles2.map((title) => {
          return <ExploreCards genreTitle={title.genre} color = {title.color} />;
        })}
    </div>
    </div>
  )
}

export default Explore
