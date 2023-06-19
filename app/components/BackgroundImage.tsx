import { resizePoster } from "@/app/lib/resizePoster";

interface BackgroundImageProps {
  url?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundImage = ({
  url,
  className,
  children,
}: BackgroundImageProps) => {

  return (
    <div
      className={className}
      style={{ backgroundImage: `url('${resizePoster(url, 1080)}` }}
    >
      {children}
    </div>
  );
};
