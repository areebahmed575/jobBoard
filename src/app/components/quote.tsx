'use client'
import React, { useState, useEffect } from 'react';

interface QuoteCardProps {
  imageUrl: string;
  quote: string;
  name: string;
  navigateToQuote: (index: number) => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ imageUrl, quote, name, navigateToQuote }) => {
  return (
    <div className="text-center">
      <div className="mx-auto rounded-full h-20 w-20 flex items-center justify-center bg-gray-200">
        <img src={imageUrl} alt="User" className="rounded-full h-16 w-16" />
      </div>
      <p className="mt-4 text-lg font-semibold">{quote}</p>
      <p className="text-gray-600">{name}</p>
      <div className="flex justify-center mt-2 space-x-2">
        {/* Navigation dot buttons */}
        <button
          className="w-3 h-3 rounded-full bg-gray-400"
          onClick={() => navigateToQuote(0)}
        ></button>
        <button
          className="w-3 h-3 rounded-full bg-gray-400"
          onClick={() => navigateToQuote(1)}
        ></button>
      </div>
    </div>
  );
}

const App = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const quotes = [
    {
      imageUrl: '1638368405154.jpg',
      quote: 'This is the first quote.',
      name: 'Zia Khan',
    },
    {
      imageUrl: '1638368405154.jpg',
      quote: 'This is the second quote.',
      name: 'Zia Khan',
    },
  ];

  const navigateToQuote = (index: number) => {
    setCurrentQuoteIndex(index);
  }

  useEffect(() => {
    const nextQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    const timer = setTimeout(() => {
      setCurrentQuoteIndex(nextQuoteIndex);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [currentQuoteIndex, quotes.length]);

  return (
    <div className="container mx-auto mt-8 flex items-center justify-center">
      <div className="relative">
        <QuoteCard
          imageUrl={quotes[currentQuoteIndex].imageUrl}
          quote={quotes[currentQuoteIndex].quote}
          name={quotes[currentQuoteIndex].name}
          navigateToQuote={navigateToQuote}
        />
      </div>
    </div>
  );
}

export default App;
