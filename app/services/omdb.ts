import { Serie } from "@/app/models/Serie";
import { Season } from "@/app/models/Season";
import { Episode } from "@/app/models/Episode";

const BASE_URL = process.env.OMDB_URL;
const API_KEY = process.env.OMDB_API_KEY;

export const getTvSerie = async (id: string): Promise<Serie> => {
  const url = `${BASE_URL}?i=${id}&apiKey=${API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Serie;
};

export const getSeason = async (id: string, season: number): Promise<Season> => {
  const url = `${BASE_URL}?i=${id}&apiKey=${API_KEY}&Season=${season}`;

  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Season;
};

export const getEpisode = async(id: string): Promise<Episode> => {
  const url = `${BASE_URL}?i=${id}&apiKey=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as Episode;
};
