import { Star } from "@/app/components/icons/Star";

export const EpisodeDetails = () => {
  return (
    <>
      <div className="pl-[38px] pr-[45px] text-black font-light flex justify-between items-center h-[113px] border-b border-[rgba(151,151,151,0.2)] border-solid">
        <div>Episode 1 — 2011-04-17</div>
        <div className="flex items-center gap-[17px]">
          <div style={{ fill: "#EFD358" }}>
            <Star />
          </div>
          <div className="text-[18px]" style={{ lineHeight: "21px" }}>
            <span className="font-bold">9</span>/10
          </div>
        </div>
      </div>
      <div className="text-black pl-[38px] pr-[95px] pt-[45px]">
        <h2 className="text-[27px] font-bold" style={{ lineHeight: "32px" }}>
          Insecure as Fuck
        </h2>
        <p className="font-light">
          In the wake of her 29th birthday, Issa reflects on her life and
          relationship choices.
        </p>
      </div>
    </>
  );
};
