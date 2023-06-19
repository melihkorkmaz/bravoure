import { Hero } from "@/app/components/Hero";
import { Episodes } from "@/app/components/Episodes";
import { EpisodeDetails } from "@/app/components/EpisodeDetails";
import { getTvSerie, getSeason } from "@/app/services/omdb";
import { BackgroundImage } from "@/app/components/BackgroundImage";
import { EpisodePoster } from "@/app/components/EpisodePoster";
import { Metadata } from "next";
import { Suspense } from "react";

interface TvSerieProps {
  params: {
    id: string;
    season: number;
  };
}

export default async function TvSerie({
  params: { id, season: seasonId },
}: TvSerieProps) {
  const [tvSerie, season] = await Promise.all([
    getTvSerie(id),
    getSeason(id, seasonId),
  ]);

  return (
    <>
      <div className="min-h-full flex flex-col xl:flex-row">
        <BackgroundImage
          className="xl:w-[65%] w-full bg-center bg-cover bg-no-repeat bg-blend-darken flex flex-col background-image"
          url={tvSerie?.Poster}
        >
          <div className="relative xl:pl-[90px] px-12 flex flex-col-reverse xl:h-[536px] 3xl:h-auto 3xl:flex-1">
            <Hero serie={tvSerie} season={seasonId} />
          </div>
          <div className="xl:pl-[80px] xl:pr-0 px-[40px] flex-1 3xl:h-[30%] 3xl:flex-none">
            <Suspense fallback={<>...</>}>
              <Episodes season={season} />
            </Suspense>
          </div>
        </BackgroundImage>
        <div className="flex-1 flex flex-col">
          <div className="bg-cover bg-center bg-no-repeat relative xl:block hidden xl:h-[536px] 3xl:h-auto 3xl:flex-1">
            <EpisodePoster />
          </div>
          <div className="flex-1 3xl:h-[30%] 3xl:flex-none">
            <EpisodeDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: TvSerieProps): Promise<Metadata> {
  // Fetch use cache , so it's going to make 1 call instead 2 for getting tv serie
  const tvSerie = await getTvSerie(params.id);

  return {
    title: tvSerie?.Title,
    description: tvSerie?.Plot,
  };
}
