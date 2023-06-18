export const Hero = () => {
  return (
    <div id="hero" className="absolute text-white bottom-[22%]">
      <div className="3xl:text-[27px] text-[23px] font-light" style={{ lineHeight: "27px" }}>
        Season 1
      </div>
      <h1 className="font-bold 3xl:text-[82px] text-[74px]" style={{ lineHeight: "87px" }}>
        Insecure
      </h1>
      <p
        className="3xl:max-w-[600px] 2xl:max-w-[491px] 3xl:text-[27px] text-[23px] font-light"
        style={{ lineHeight: "27px" }}
      >
        Follows the awkward experiences and racy tribulations of a modern-day
        African-American woman.
      </p>
    </div>
  );
};
