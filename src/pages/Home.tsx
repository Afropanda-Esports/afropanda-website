import MerchShopSection from "../components/Merch/Merch";
import { Services } from "../components/OurServices/Services";
import VideoTrailer from "../components/Trailer/VideoTrailer";
import Events from "../components/Upcoming/Events";
import { About, Album, Hero } from "../components/Home";

export default function Home() {
  return (
    <>
      <Hero /> {/* Done */}
      <VideoTrailer />
      <About /> {/* Done */}
      <Services />
      <Events />
      <Album /> {/* Done */}
      <MerchShopSection />
    </>
  );
}
