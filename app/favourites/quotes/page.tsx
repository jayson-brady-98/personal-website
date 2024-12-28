'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shuffle } from "lucide-react"
import { useEffect, useState } from "react"

type Quote = {
  text: string;
  author: string | null;
  note: string | null;
  is_favorite: boolean;
};

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quotes')
      .then(async res => {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Failed to fetch quotes: ${res.status} ${errorText}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Received quotes:', data);
        if (!Array.isArray(data)) {
          console.error('Expected array of quotes but received:', data);
          return;
        }
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

  const formatQuoteText = (text: string) => {
    return text.replace(/\n\n/g, '<br /><br />');
  };

  const getTextSizeClass = (text: string) => {
    const wordCount = text.split(/\s+/).length;
    if (wordCount > 80) {
      return 'text-sm'; // smaller text for long quotes
    }
    return 'text-lg'; // default size for shorter quotes
  };

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  const randomQuote = quotes[currentQuoteIndex];
  console.log('Current quote:', randomQuote);

  return (
    <div 
      className="h-screen overflow-hidden flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ 
        backgroundImage: "url('/backgrounds/quotes-background.jpeg')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="flex items-center gap-4 max-w-2xl w-full px-4 h-[70vh] mt-16">
        <Card className="backdrop-blur-sm bg-black/20 flex-grow overflow-auto">
          {randomQuote && (
            <CardContent className="p-6">
              <blockquote className={getTextSizeClass(randomQuote.text)}>
                <p 
                  className="mb-4 text-[#F7DAAB]"
                  dangerouslySetInnerHTML={{ __html: formatQuoteText(randomQuote.text) }}
                />
                {(randomQuote.author || randomQuote.note) && (
                  <footer className="text-[#EE9F3B]">
                    — {randomQuote.author || randomQuote.note}
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
