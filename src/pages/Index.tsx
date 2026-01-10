import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventDetailsSection from '@/components/EventDetailsSection';
import HackathonSection from '@/components/HackathonSection';
import CTFSection from '@/components/CTFSection';
import ExpertSessionsSection from '@/components/ExpertSessionsSection';
import ScheduleSection from '@/components/ScheduleSection';
import VenueSection from '@/components/VenueSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';
import CyberBackground from '@/components/CyberBackground';
import IntroVideo from '@/components/video/IntroVideo';

const Index = () => {
  const [introVideoEnded, setIntroVideoEnded] = useState(false);
  const [videoBackgroundImage, setVideoBackgroundImage] = useState<string | null>(null);

  const handleVideoEnd = (lastFrameUrl: string) => {
    setVideoBackgroundImage(lastFrameUrl);
    setIntroVideoEnded(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Intro Video */}
      {!introVideoEnded && (
        <IntroVideo
          videoSrc={"/intro-video.mp4"}
          onVideoEnd={handleVideoEnd}
        />
      )}

      {/* Show video background overlay when video has ended */}
      {videoBackgroundImage && (
        <div
          id="video-background-overlay"
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${videoBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.7,
            zIndex: 0
          }}
        />
      )}

      {/* Show original background when video hasn't ended and no video background is set */}
      {!introVideoEnded && !videoBackgroundImage && <CyberBackground />}

      {/* Navigation */}
      <Navbar showAfterIntro={introVideoEnded} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventDetailsSection />
        <HackathonSection />
        <CTFSection />
        <ExpertSessionsSection />
        <ScheduleSection />
        <VenueSection />
        <SponsorsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
