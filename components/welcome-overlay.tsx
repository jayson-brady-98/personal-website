"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Headphones } from "lucide-react"

export function WelcomeOverlay() {
  // Start with true to show overlay by default during SSR
  const [showWelcome, setShowWelcome] = useState<boolean>(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isEntering, setIsEntering] = useState(true)
  const [isContentFading, setIsContentFading] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false)

  // Check if this is the first visit using localStorage
  useEffect(() => {
    try {
      // For testing: uncomment this line to reset the localStorage value
      localStorage.removeItem('hasVisitedBefore')
      
      const hasVisited = localStorage.getItem('hasVisitedBefore')
      console.log("localStorage check:", hasVisited)
      
      if (hasVisited) {
        console.log("Return visit detected, hiding welcome")
        setShowWelcome(false)
      } else {
        console.log("First visit detected, showing welcome")
        // Start with entering animation
        setTimeout(() => {
          setIsEntering(false)
        }, 100)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
      // Default to showing the welcome overlay if localStorage fails
      setTimeout(() => {
        setIsEntering(false)
      }, 100)
    }
    
    setHasCheckedStorage(true)
  }, [])

  // Preload audio when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/welcome-music.mp3');
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
      audioRef.current.preload = 'auto';
      
      audioRef.current.oncanplaythrough = () => {
        console.log("Audio loaded and ready to play");
        setAudioLoaded(true);
      };
      
      audioRef.current.onerror = (e) => {
        console.error("Audio loading error:", e);
      };
      
      // Let the audio play to completion
      audioRef.current.onended = () => {
        console.log("Audio playback completed");
      };
      
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.src = '';
          audioRef.current = null;
        }
      };
    }
  }, []);

  const handlePlayAndEnter = () => {
    console.log("Play and enter clicked");
    
    // First fade out the content
    setIsContentFading(true);
    
    // Play the audio
    if (audioRef.current && audioLoaded) {
      console.log("Attempting to play audio");
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playback started successfully");
            
            // After content fades, start the circle transition
            setTimeout(() => {
              setIsTransitioning(true);
              
              // Then dismiss the overlay after the circle transition
              setTimeout(() => {
                setShowWelcome(false);
                try {
                  localStorage.setItem('hasVisitedBefore', 'true');
                } catch (error) {
                  console.error("Error setting localStorage:", error);
                }
              }, 1500); // 1.5 seconds for circle transition (increased)
            }, 2000); // 2 seconds for content fade (increased)
          })
          .catch(error => {
            console.error("Audio playback failed:", error);
            // Still follow the same transition pattern even if audio fails
            setTimeout(() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setShowWelcome(false);
                try {
                  localStorage.setItem('hasVisitedBefore', 'true');
                } catch (error) {
                  console.error("Error setting localStorage:", error);
                }
              }, 1500);
            }, 2000);
          });
      }
    } else {
      console.warn("Audio not ready to play yet");
      // Follow the same transition pattern even if audio isn't ready
      setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setShowWelcome(false);
          try {
            localStorage.setItem('hasVisitedBefore', 'true');
          } catch (error) {
            console.error("Error setting localStorage:", error);
          }
        }, 1500);
      }, 2000);
    }
  };

  // For debugging
  console.log("Current showWelcome state:", showWelcome);
  console.log("Audio loaded state:", audioLoaded);
  console.log("Is entering state:", isEntering);

  // Helper function to create staggered letter animations with randomized timing
  const renderStaggeredText = (text: string, baseColor: string, startDelay: number = 0) => {
    // Create a randomized order for the letters to disappear
    const randomOrder = Array.from({ length: text.length }, (_, i) => i)
      .sort(() => Math.random() - 0.5);
    
    // Map to track which random index corresponds to each position
    const randomDelayMap: Record<number, number> = {};
    randomOrder.forEach((originalIndex, randomIndex) => {
      randomDelayMap[originalIndex] = randomIndex;
    });
    
    return text.split('').map((char, index) => (
      <span 
        key={index}
        className="inline-block"
        style={{
          color: baseColor,
          opacity: isEntering ? 0 : isContentFading ? 0 : 1,
          transform: isEntering ? 'translateY(20px)' : 'translateY(0)',
          transition: isEntering || isContentFading 
            ? 'opacity 1.2s ease-out, transform 1.5s ease-out' 
            : 'none',
          transitionDelay: isEntering 
            ? `${startDelay + index * 50}ms` 
            : isContentFading 
              ? `${startDelay + randomDelayMap[index] * 80}ms` 
              : '0ms',
        }}
      >
        {char}
      </span>
    ));
  };

  // Render the overlay by default, then hide it if needed after localStorage check
  if (!showWelcome && hasCheckedStorage) {
    console.log("Skipping render: state is false");
    return null;
  }

  console.log("Rendering welcome overlay");
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1500 ease-in-out ${
        isTransitioning ? 'bg-transparent' : 'bg-black/60'
      }`}
      style={{
        transition: 'all 1.5s ease-in-out',
        backdropFilter: isTransitioning ? 'none' : 'blur(8px)',
        WebkitBackdropFilter: isTransitioning ? 'none' : 'blur(8px)', // Safari support
        clipPath: isTransitioning 
          ? 'circle(0% at center)' 
          : 'circle(150% at center)'
      }}
    >
      <div 
        className="text-center px-4 py-8 max-w-md transition-all duration-1000 ease-out"
        style={{
          opacity: isEntering ? 0 : 1,
          transform: isEntering ? 'translateY(50px)' : 'translateY(0)',
          transition: 'opacity 1s ease-out, transform 1s ease-out'
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 transition-all duration-1000 ease-out">
          <span className="inline-flex">{renderStaggeredText("welcome", "#C94128", 0)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("to", "#F7DAAC", 100)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("my", "#F7DAAC", 150)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("quirky", "#4B827D", 200)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("little", "#4B827D", 250)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("corner", "#4B827D", 300)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("of", "#F7DAAC", 350)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("the", "#F7DAAC", 400)}</span>{' '}
          <span className="inline-flex">{renderStaggeredText("internet", "#F7DAAC", 450)}</span>
        </h2>
        <div 
          className="flex flex-col items-center justify-center transition-all duration-1000 ease-out"
          style={{
            opacity: isEntering ? 0 : isContentFading ? 0 : 1,
            transform: isEntering ? 'translateY(30px)' : 'translateY(0)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: isContentFading ? '500ms' : '0ms'
          }}
        >
          <Button 
            onClick={handlePlayAndEnter}
            className="rounded-full w-16 h-16 bg-[#EEA139] hover:bg-[#EEA139]/80 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
            aria-label="Play music and enter site"
          >
            <Headphones className="w-8 h-8" />
          </Button>
          <p 
            className="text-xs text-gray-400 mt-2 opacity-80"
            style={{
              transitionDelay: isContentFading ? '600ms' : '0ms'
            }}
          >
            (sound on)
          </p>
        </div>
      </div>
    </div>
  );
} 