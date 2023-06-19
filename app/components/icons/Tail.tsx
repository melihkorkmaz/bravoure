interface TailProps {
  size?: number;
  direction?: "right" | "left";
}

export const Tail = ({ size = 30, direction = "right" }: TailProps) => {
  const width = size;
  const height = size * 0.7;
  const rotate = direction === "left" ? 180 : 0;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="current"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M0.5 10.5H28.5" stroke="white" />
      <path
        d="M19.5 1.5L28.5 10.5L19.5 19.5"
        stroke="white"
        strokeLinecap="square"
      />
    </svg>
  );
};
