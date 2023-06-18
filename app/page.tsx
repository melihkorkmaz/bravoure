import Image from "next/image";
import { Hero } from "@/app/components/Hero";
import { Episodes } from "./components/Episodes";
import { EpisodeDetails } from "./components/EpisodeDetails";

export default function Home() {
  return (
    <div className="layout">
      <div
        className="main"
        style={{ backgroundImage: "url('/images/insecure.jpg')" }}
      >
        <div className="hero-section">
          <Hero />
        </div>
        <div className="episodes-section">
          <Episodes />
        </div>
      </div>
      <div className="side">
        <div className="episode-image-container">
          <Image
            src="/images/S01E01.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="episode-details-container">
          <EpisodeDetails />
        </div>
      </div>
    </div>
  );
}
