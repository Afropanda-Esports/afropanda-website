import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
const SectionHeader = lazy(() => import("../SectionHeader"));

export default function VideoTrailer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });


  // Dynamically import video
  const [videoSrc, setVideoSrc] = useState<string>('');
  useEffect(() => {
    const loadVideo = async () => {
      const videoModule = await import("../../assets/Trailer.mp4");
      setVideoSrc(videoModule.default);
    };
    loadVideo();
  }, []);

  // Handle video playback based on visibility
  useEffect(() => {
    if (!videoRef.current) return;

    if (inView && !isPlaying) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.warn("Video autoplay failed:", error));
    } else if (!inView && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView, isPlaying]);

  // Handle video loading state
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  // Error handling
  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video loading error:", e);
    // You could set an error state here and show a fallback UI
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#191825] relative"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="h-8 bg-gray-200 animate-pulse rounded" />}>
          <SectionHeader
            sectionHeader="Watch Our Exciting Trailer"
            subSectionHeader="Trailer"
          />
        </Suspense>

        <div className="relative">
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="w-full aspect-video bg-gray-800 animate-pulse rounded-md" />
          )}

          <video
            ref={videoRef}
            className={`w-full md:rounded-md focus:outline-none ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={handleLoadedData}
            onError={handleError}
          >
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>

          {/* Playback controls - optional */}
          {isLoaded && (
            <button
              className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play();
                    setIsPlaying(true);
                  } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                  }
                }
              }}
            >
              <span className="sr-only">
                {isPlaying ? 'Pause' : 'Play'} video
              </span>
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}