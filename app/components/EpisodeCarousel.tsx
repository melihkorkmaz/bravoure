"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Episode as EpisodeModel } from "@/app/models/Episode";
import { GlobalContext } from "@/app/providers/GlobalProvider";
import { Tail } from "./icons/Tail";

const APPROXIMATELY_ITEM_WIDTH = 200;

interface EpisodeProps {
  episodes: EpisodeModel[];
}

// TODO: Add keyboard events to able navigate between items
export const EpisodeCarousel = ({ episodes }: EpisodeProps) => {
  const { onSelectEpisode, currentEpisode } = React.useContext(GlobalContext);
  const [scrollState, setScrollState] = React.useState<
    "start" | "scrolling" | "end"
  >("start");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!episodes?.length) {
      return;
    }

    onSelectEpisode(episodes[0]);
  }, [episodes, onSelectEpisode]);

  useEffect(() => {
    const onScrollChange = (e: any) => {
      const left = e?.target?.scrollLeft || 0;
      const width = e?.target?.getBoundingClientRect()?.width || 0;
      
      setScrollState(() => {
        if (left === 0) {
          return "start";
        } else if (left >= width) {
          return "end";
        } 

        return "scrolling";
      });
    };

    scrollRef.current?.addEventListener("scroll", onScrollChange);

    return () => {
      scrollRef.current?.removeEventListener("scroll", onScrollChange);
    };
  }, [scrollRef]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef?.current) {
      return;
    }

    const { scrollLeft } = scrollRef.current;
    const left =
      direction === "right"
        ? scrollLeft + APPROXIMATELY_ITEM_WIDTH
        : scrollLeft - APPROXIMATELY_ITEM_WIDTH;

    scrollRef.current.scroll({
      left,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="w-full text-white overflow-y-hidden overflow-x-auto flex gap-[3.2rem] scroll-smooth hide-scroll pr-12 relative"
        style={{ scrollSnapType: "inline mandatory" }}
      >
        {episodes?.map((episode) => (
          <div
            key={episode.imdbID}
            className="3xl:w-[250px] w-[201px] flex-shrink-0 cursor-pointer relative"
            style={{ scrollSnapAlign: "start", aspectRatio: ".87" }}
            onClick={() => onSelectEpisode(episode)}
            role="button"
          >
            <div className="w-[30px] h-[30px] bg-white flex items-center justify-center text-[1.06rem] text-black absolute top-0 left-0 z-10">
              {episode.Episode}
            </div>
            <div className="relative bg-black" style={{ aspectRatio: "1.5" }}>
              <Image
                src={episode.Poster}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className={episode.imdbID === currentEpisode?.imdbID ? "opacity-100" : "opacity-40"}
              />
            </div>

            <div className="text-base mb-[10px] mt-[19px]">{episode.Title}</div>
            <p className="text-sm font-light three-line-ellipsis w-full">
              {episode.Plot}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-[16px] items-center justify-end pr-[22px] py-[22px]">
        <button
          className={`outline-none focus:outline-none ${
            scrollState === "start" ? "opacity-20" : "opacity-100"
          }`}
          disabled={scrollState === "start"}
          onClick={() => handleScroll("left")}
        >
          <Tail direction="left" />
        </button>
        <button
          className={`outline-none focus:outline-none ${
            scrollState === "end" ? "opacity-20" : "opacity-100"
          }`}
          disabled={scrollState === "end"}
          onClick={() => handleScroll("right")}
        >
          <Tail />
        </button>
      </div>
    </>
  );
};
