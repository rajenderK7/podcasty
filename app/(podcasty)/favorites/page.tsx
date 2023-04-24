import Card from "@/components/Card";
import LoginButton from "@/components/LoginButton";
import { fetchUserFavoritePodcasts } from "@/sanity/utils/podcasts";
import { SignedIn, SignedOut, auth } from "@clerk/nextjs/app-beta";
import React from "react";

const Page = async () => {
  const { userId } = auth();
  const favoritePodcasts = await fetchUserFavoritePodcasts(userId!);
  return (
    <div>
      <SignedIn>
        <h1 className="font-bold text-xl mt-3 mb-1">My Favorites</h1>
        <p className="text-center mb-4">
          Navigate to a podcast and click add to favorites, refresh to see your
          favorites 🚀
        </p>
        {favoritePodcasts.length > 0 &&
          favoritePodcasts.map((podcast) => {
            return <Card key={podcast._slug} {...podcast} />;
          })}
        {favoritePodcasts.length == 0 && (
          <p className="text-center">No favoties yet</p>
        )}
      </SignedIn>
      <SignedOut>
        <p className="text-center text-red-600 my-3">Login to continue</p>
        <LoginButton />
      </SignedOut>
    </div>
  );
};

export default Page;
