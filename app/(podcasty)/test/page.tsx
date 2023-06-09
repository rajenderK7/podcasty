import { fetchPodcasts } from "@/sanity/utils/podcasts";
import React from "react";

const Test = async () => {
  let pods = await fetchPodcasts();

  return (
    <div className="w-full">
      {pods.map((pod: any) => {
        return <audio key={pod.title} src={pod.audio} controls />;
      })}
    </div>
  );
};

export default Test;
