import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Trending from "@/components/Trending";
import { fetchPodcasts } from "@/sanity/utils/podcasts";

export default async function Home() {
  const podcasts = await fetchPodcasts();

  return (
    <div className="flex flex-col">
      <div className="hidden lg:relative">
        <Search />
      </div>
      {/* @ts-ignore */}
      <Trending />
      {/* Main Podcasts */}
      <h1 className="font-bold text-xl">Recommended</h1>
      <div className="w-full flex justify-start items-center flex-wrap">
        {podcasts.map((podcast) => {
          return <Card key={podcast._slug} {...podcast} />;
        })}
      </div>
      {/* Card Components */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
