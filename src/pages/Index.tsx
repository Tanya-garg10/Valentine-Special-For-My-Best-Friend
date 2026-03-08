import { useState, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle from "@/components/MusicToggle";
import SecretPasswordEntry from "@/components/SecretPasswordEntry";
import HeroSection from "@/components/HeroSection";
import MemoryTimeline from "@/components/MemoryTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import InsideJokes from "@/components/InsideJokes";
import LoveQuotes from "@/components/LoveQuotes";
import WishWall from "@/components/WishWall";
import CompatibilityMeter from "@/components/CompatibilityMeter";
import LoveCalculator from "@/components/LoveCalculator";
import LoveLetterGenerator from "@/components/LoveLetterGenerator";
import FriendshipQuiz from "@/components/FriendshipQuiz";
import FuturePredictions from "@/components/FuturePredictions";
import CountdownTimer from "@/components/CountdownTimer";
import HeartGame from "@/components/HeartGame";
import CelebrationPage from "@/components/CelebrationPage";
import ResponseForm from "@/components/ResponseForm";

const Index = () => {
  const [saidYes, setSaidYes] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Show password entry first
  if (!unlocked) {
    return <SecretPasswordEntry onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="relative">
      <FloatingHearts />
      <MusicToggle />

      {!saidYes ? (
        <>
          <HeroSection onContinue={scrollToContent} />
          <div ref={contentRef}>
            <MemoryTimeline />
            <PhotoGallery />
            <InsideJokes />
            <LoveQuotes />
            <WishWall />
            <CompatibilityMeter />
            <LoveCalculator />
            <LoveLetterGenerator />
            <FriendshipQuiz />
            <FuturePredictions />
            <CountdownTimer />
            <HeartGame onYes={() => setSaidYes(true)} />
          </div>
        </>
      ) : (
        <>
          <CelebrationPage />
          <ResponseForm />
        </>
      )}
    </div>
  );
};

export default Index;
