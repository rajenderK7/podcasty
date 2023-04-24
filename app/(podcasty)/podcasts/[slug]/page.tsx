import React from "react";
import Image from "next/image";
import { fetchPodcast } from "@/sanity/utils/podcasts";
import {
  fetchFavoriteCount,
  fetchFavoritedByUser,
} from "@/firestore/utils/favorite";
import { SignedIn, SignedOut, auth } from "@clerk/nextjs/app-beta";
import AddToFavoriteButton, { RemoveFromFavorite } from "./Favorite";
import Link from "next/link";

type Slug = {
  params: {
    slug: string;
  };
};

export interface FavoriteProps {
  _id: string;
  userId: string;
}

export interface PodcastProps {
  _id: string;
  title: string;
  _slug: string;
  author: string;
  desc: string;
  notes: string;
  bannerURL: string;
  audioURL: string;
  categories: string[];
}

const PodcastPage = async ({ params: { slug } }: Slug) => {
  const { userId } = auth();
  const { title, author, desc, bannerURL, audioURL, categories, _id } =
    await fetchPodcast(slug);
  const favorites = await fetchFavoriteCount(_id);
  const favoriteByUser = await fetchFavoritedByUser(userId!, _id);

  return (
    <div className="body-font font-mabry">
      <p className="text-center my-4 text-4xl font-bold">{title}</p>
      <div className="mb-5 flex bg-[#ffffff] flex-col justify-center lg:flex lg:flex-row lg:justify-evenly lg:items-center h-[480px]">
        <div className="border-2 border-black rounded-lg text-center w-full p-3 lg:mr-3 hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:shadow-lg h-[480px] hover:border-r-4 hover:border-b-4 hover:border-black">
          <div className="w-full relative rounded-lg h-[85%]">
            <Image className="rounded-lg" src={bannerURL} alt={title} fill />
          </div>
          <div className="w-full flex justify-center mt-2">
            <audio src={audioURL} controls />
          </div>
        </div>
        <div className="border-2 border-black rounded-lg w-[50%] flex flex-col h-full p-3 bg-white hover:-translate-x-1 hover:-translate-y-1 duration-200 hover:border-r-4 hover:border-b-4 hover:border-black">
          <div>
            <p className="pb-1 text-xl">Author: {author}</p>
            <p className="pb-1">
              Category:{" "}
              {categories.map((category, index) => (
                <span key={index}>{category}</span>
              ))}
            </p>
            <p className="pb-1">
              Favorites: {favorites ?? <span>loading</span>}
            </p>
          </div>
          <div className="flex-col my-3 min-h-[285px] max-h-[285px]">
            <p className="text-xl font-semibold">Description</p>
            <p className="bg-white mt-2">{desc}</p>
          </div>
          <div className="my-4 mx-auto">
            <SignedIn>
              {favoriteByUser > 0 && (
                /* @ts-ignore */
                <RemoveFromFavorite userId={userId!} _id={_id} />
              )}
              {favoriteByUser == 0 && (
                /* @ts-ignore */
                <AddToFavoriteButton _id={_id} userId={userId!} />
              )}
            </SignedIn>
          </div>
          <SignedOut>
            <p>Login to add to favorites</p>
          </SignedOut>
        </div>
      </div>
      <div className="flex flex-row justify-center sm:flex-col sm:mt-2">
        <div className="sm:flex sm:flex-row sm:justify-between sm: w-auto">
          <button className="p-2 mt-2 mr-1 outline rounded-lg bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-4 hover:border-r-4 sm:w-1/2">
            More from{" "}
            <b>
              <i>{author}</i>
            </b>
          </button>
          <button className="p-2 mt-2 ml-1 outline rounded-lg bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-4 hover:border-r-4 sm:w-1/2">
            More from{" "}
            {categories.map((category, index) => (
              <span key={index}>
                <b>
                  <i>{category}</i>
                </b>
              </span>
            ))}
          </button>
        </div>
        <div className="sm:flex sm:flex-col mb-5">
          <Link
            href="/"
            className="text-center p-2 mt-2 border-2 rounded-lg bg-[#000000] text-white hover:bg-[#FF90E7] hover:text-black hover:border-black hover:border-b-4 hover:border-r-4"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
