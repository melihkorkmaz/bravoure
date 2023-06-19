import { Season } from "@/app/models/Season";
import { getEpisode } from "@/app/services/omdb";
import { EpisodeCarousel } from "@/app/components/EpisodeCarousel";

interface EpisodesProps {
  season: Season;
}

export const Episodes = async ({ season }: EpisodesProps) => {
  const episodeIds = season?.Episodes?.map((episode) => episode.imdbID);
  const episodes = await Promise.all(
    episodeIds?.map((episodeId) => getEpisode(episodeId)) || []
  );

  return  <EpisodeCarousel episodes={episodes}/>;
};
