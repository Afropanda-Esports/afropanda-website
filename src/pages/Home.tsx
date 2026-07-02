import { Suspense, lazy } from "react";
import { Hero } from "../components/Home";
import FeaturedCards from "../components/Home/Feature";
import About from "../components/Home/About/About";
import JoinPathways from "../components/Home/JoinPathways";
import Events from "../components/Home/Upcoming/Events";
import LatestArticles from "../components/Home/LatestArticles";
import EventsTeaser from "../components/Home/EventsTeaser";
import Album from "../components/Home/Album/Album";

const Services = lazy(() =>
  import("../components/Home/OurServices/Services").then((module) => ({
    default: module.Services,
  }))
);
const MerchShopSection = lazy(() => import("../components/Home/Merch/Merch"));

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCards />
      <About />
      <Services />
      <JoinPathways />
      <Events />
      <Suspense fallback={null}>
        <MerchShopSection />
      </Suspense>
      <LatestArticles />
      <EventsTeaser />
      <Album />
    </>
  );
}
