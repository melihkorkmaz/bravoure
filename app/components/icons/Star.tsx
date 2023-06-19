
interface StarProps {
    size?: number
  }

export const Star = ({ size =  28 }: StarProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0.692261L18.3237 9.45346L27.9924 10.8587L20.9962 17.678L22.6473 27.3077L14 22.7612L5.35276 27.3077L7.00386 17.678L0.00769043 10.8587L9.67639 9.45346L14 0.692261Z"
        fill="#EFD358"
      />
    </svg>
  );
};
