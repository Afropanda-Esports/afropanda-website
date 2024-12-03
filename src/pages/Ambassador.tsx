import {
  AmbassadorHero,
  HowToStart,
  Influence,
} from "../components/Ambassador";
import VideoTrailer from "../components/Trailer/VideoTrailer";

export default function Ambassador() {
  return (
    <>
      <AmbassadorHero />
      <VideoTrailer />
      <Influence />
      {/* <Testimonial /> */}
      <HowToStart />
    </>
  );
}
