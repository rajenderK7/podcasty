"use client";

import { PodcastProps } from "@/app/(podcasty)/podcasts/[slug]/page";
import { fetchPodcasts } from "@/sanity/utils/podcasts";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchResult from "./SearchResult";

const Search = () => {
  const [query, setQuery] = useState("");
  const [podcasts, setPodcasts] = useState<PodcastProps[]>([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastProps[]>([]);

  const searchHandler = (e: any) => {
    setQuery(e.target.value);
    const filtered = podcasts.filter((podcast) =>
      podcast.title.toLowerCase().includes(e.target.value)
    );
    setFilteredPodcasts(filtered);
    console.log(filteredPodcasts);
  };

  const getPodcasts = async () => {
    const pods = await fetchPodcasts();
    setPodcasts(pods);
  };

  const clear = () => {
    setQuery("");
  };

  useEffect(() => {
    getPodcasts();
  }, []);
  return (
    <div className="w-full">
      <div className="mx-auto hidden mt-3 lg:mt-0 w-full lg:flex border-black border items-center rounded-full lg:w-[70%] p-1 text-base bg-white">
        <input
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Search your liking.."
          onChange={searchHandler}
          value={query}
        />
        <BiSearch className="mx-2 cursor-pointer text-2xl" />
      </div>
      {query.length > 0 && filteredPodcasts.length > 0 && (
        <div className="rounded-lg p-2 bg-white absolute top-[40px] mt-3">
          {filteredPodcasts.map((podcast, index) => {
            return (
              <SearchResult
                key={index}
                _slug={podcast._slug}
                title={podcast.title}
                clear={clear}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
