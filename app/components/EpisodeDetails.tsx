"use client";
import { useContext } from "react";
import { Star } from "@/app/components/icons/Star";
import { GlobalContext } from "@/app/providers/GlobalProvider";
import { formatDateString } from "@/app/lib/dateTimeUtils";

export const EpisodeDetails = () => {
  const { currentEpisode: episode } = useContext(GlobalContext);

  if (!episode) {
    return null;
  }

  return (
    <>
      <div className="pl-[38px] pr-[45px] text-black font-light flex justify-between items-center xl:h-[113px] h-[60px] border-b border-[rgba(151,151,151,0.2)] border-solid">
        <div className="text-lg">
          Episode {episode.Episode} — {formatDateString(episode.Released)}
        </div>
        <div className="flex items-center gap-[17px]">
          <Star />
          <div className="text-lg" style={{ lineHeight: "21px" }}>
            <span className="font-bold">
              {parseInt(episode.imdbRating).toFixed(0)}
            </span>
            /10
          </div>
        </div>
      </div>
      <div className="text-black xl:pl-[38px] xl:pr-[95px] xl:pt-[44px] py-[18px] px-[40px]">
        <h2 className="text-3xl font-bold">{episode.Title}</h2>
        <p className="font-light text-xl">{episode.Plot}</p>
      </div>
    </>
  );
};
