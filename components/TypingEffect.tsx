import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
}

export function TypingEffect({ 
  text, 
  className = '', 
  typingSpeed = 50,
  cursorBlinkSpeed = 530
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [currentIndex, setCurrentIndex] = useState(text.length);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(true);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, typingSpeed]);

  // Cursor blinking effect - only while typing
  useEffect(() => {
    if (!isTypingComplete) {
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, cursorBlinkSpeed);

      return () => clearInterval(interval);
    }
  }, [cursorBlinkSpeed, isTypingComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isTypingComplete && (
        <span 
          className="inline-block w-[3px] h-[0.9em] ml-[2px] align-middle"
          style={{
            backgroundColor: 'currentColor',
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s'
          }}
        />
      )}
    </span>
  );
}