import { Suspense, lazy } from "react";
import { About, Hero } from "../components/Home";
import EventsTeaser from "../components/Home/EventsTeaser";
import JoinPathways from "../components/Home/JoinPathways";
import LatestArticles from "../components/Home/LatestArticles";

const Services = lazy(() =>
  import("../components/Home/OurServices/Services").then((module) => ({
    default: module.Services,
  }))
);
const Album = lazy(() => import("../components/Home/Album/Album"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <JoinPathways />
      <Suspense fallback={null}>
        <Services />
        <LatestArticles />
        <EventsTeaser />
        <Album />
      </Suspense>
    </>
  );
}
