import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export const addToFavorite = async (podcastId: string, userId: string) => {
  const collectionRef = collection(db, "likes");
  const q = query(
    collectionRef,
    where("userId", "==", userId),
    where("podcastId", "==", podcastId)
  );
  const count = (await getCountFromServer(q)).data().count;
  if (count > 0) return;
  const data = {
    podcastId,
    userId,
  };
  await addDoc(collectionRef, data);
};

export const removeFromFavorite = async (podcastId: string, userId: string) => {
  const collectionRef = collection(db, "likes");
  const q = query(
    collectionRef,
    where("userId", "==", userId),
    where("podcastId", "==", podcastId)
  );
  const docRef = (await getDocs(q)).docs[0].ref;
  console.log(docRef);
  await deleteDoc(docRef);
};

export const fetchUserFavoritePodcastsIds = async (
  userId: string
): Promise<string[]> => {
  const collectionRef = collection(db, "likes");
  const q = query(collectionRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);
  let listOfPodcasts: string[] = [];
  snapshot.forEach((doc) => {
    listOfPodcasts.push(doc.data().podcastId);
  });
  return listOfPodcasts;
};

export const fetchFavoriteCount = async (
  podcastId: string
): Promise<number> => {
  const collectionRef = collection(db, "likes");
  const q = query(collectionRef, where("podcastId", "==", podcastId));
  const snapshot = await getCountFromServer(q);
  return snapshot.data().count;
};

export const fetchFavoritedByUser = async (
  userId: string,
  podcastId: string
) => {
  const collectionRef = collection(db, "likes");
  const q = query(
    collectionRef,
    where("podcastId", "==", podcastId),
    where("userId", "==", userId)
  );
  const snapshot = await getCountFromServer(q);
  return snapshot.data().count;
};
