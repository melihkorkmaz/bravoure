"use client";
import { useContext } from "react";
import { GlobalContext } from "@/app/providers/GlobalProvider";
import Image from "next/image";
import { resizePoster } from "@/app/lib/resizePoster";

export const EpisodePoster = () => {
  const { currentEpisode: episode } = useContext(GlobalContext);

  if (!episode) {
    return null;
  }

  console.log(episode);

  return (
    <Image
      src={resizePoster(episode.Poster)!}
      alt=""
      fill
      style={{ objectFit: "cover" }}
    />
  );
};
