import { Serie } from "@/app/models/Serie";

interface HeroProps {
  serie: Serie;
  season: number;
}

export const Hero = ({ serie, season }: HeroProps) => {
  return (
    <div className="text-white flex-col py-20">
      <div className="md:text-2xl text-xl font-light">Season {season}</div>
      <h1 className="font-bold md:text-4xl text-[46px]">{serie?.Title}</h1>
      <p className="3xl:max-w-[600px] 2xl:max-w-[491px] md:text-2xl text-xl font-light">
        {serie.Plot}
      </p>
    </div>
  );
};
