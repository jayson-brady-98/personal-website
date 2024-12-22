'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shuffle } from "lucide-react"
import { useEffect, useState } from "react"
import type { Quote } from "@/types" // You'll need to create this type

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(data => {
        console.log('Received quotes:', data);
        setQuotes(data);
        setCurrentQuoteIndex(Math.floor(Math.random() * data.length));
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch quotes:', error);
        setIsLoading(false);
      });
  }, []);

  const shuffleQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);
    setCurrentQuoteIndex(newIndex);
  };

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  const randomQuote = quotes[currentQuoteIndex];
  console.log('Current quote:', randomQuote);

  return (
    <div 
      className="h-screen overflow-hidden flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/backgrounds/quotes-background.jpeg')" }}
    >
      <div className="flex items-center gap-4 max-w-2xl w-full px-4">
        <Card className="backdrop-blur-sm bg-black/30 flex-grow">
          {randomQuote && (
            <CardContent className="p-6">
              <blockquote className="text-xl italic">
                <p className="mb-4 text-[#F7DAAB]">{randomQuote.text}</p>
                {randomQuote.author && (
                  <footer className="text-[#EE9F3B]">
                    — {randomQuote.author}
                  </footer>
                )}
              </blockquote>
            </CardContent>
          )}
        </Card>
        <Button 
          onClick={shuffleQuote}
          className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full p-3"
          size="icon"
        >
          <Shuffle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
