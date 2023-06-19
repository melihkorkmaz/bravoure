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

  return (
    <Image
      placeholder="blur"
      blurDataURL={episode.Poster}
      src={resizePoster(episode.Poster)!}
      alt=""
      fill
      style={{ objectFit: "cover" }}
      priority={false}
    />
  );
};
