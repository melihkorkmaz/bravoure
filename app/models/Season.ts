import { Episode } from "./Episode";

export interface Season {
  Title: string;
  Season: number;
  Episodes: Pick<Episode, "imdbID">[]; 
}
