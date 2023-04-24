import { PodcastProps } from "@/app/(podcasty)/podcasts/[slug]/page";
import { fetchUserFavoritePodcastsIds } from "@/firestore/utils/favorite";
import { createClient, groq } from "next-sanity";
export const client = createClient({
  projectId: "k9iiqkx5",
  dataset: "production",
});

export const fetchPodcasts = async (): Promise<PodcastProps[]> => {
  const query = groq`*[_type == "podcast"] {
    _id,
    title,
    "author": author -> name,
    "_slug": slug.current,
    "desc": description,
    "bannerURL": banner.asset -> url,
  }`;

  return await client.fetch(query);
};

export const fetchPodcast = async (slug: string): Promise<PodcastProps> => {
  const query = groq`*[_type == "podcast" && slug.current == "${slug}"][0] {
    _id,
    title,
    "author": author -> name,
    "_slug": slug.current,
    "desc": description,
    notes,
    "bannerURL": banner.asset -> url,
    "audioURL": audio.asset -> url,
    "categories": categories[]->title,
  }`;
  return await client.fetch(query);
};

export const fetchUserFavoritePodcasts = async (
  userId: string
): Promise<PodcastProps[]> => {
  const userFavoritePodcastsIds = await fetchUserFavoritePodcastsIds(userId);
  const query = `*[_type == "podcast" && _id in $ids] {
    _id,
    title,
    "author": author -> name,
    "_slug": slug.current,
    "desc": description,
    notes,
    "bannerURL": banner.asset -> url,
    "audioURL": audio.asset -> url,
    "categories": categories[]->title,
  }`;
  return await client.fetch(query, {
    ids: userFavoritePodcastsIds,
  });
};
