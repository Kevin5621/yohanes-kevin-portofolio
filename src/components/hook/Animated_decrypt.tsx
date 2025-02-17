import React, { useState, useEffect, useCallback } from 'react';

interface DecryptEffectProps {
  text: string;
  isActive: boolean;
  className?: string;
  normalDuration?: number;
  encryptedDuration?: number;
  transitionSpeed?: number;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
const WORDS = ['ENCRYPTING', 'PROCESSING', 'SECURING', 'ENCODING', 'PROTECTING'];

enum TextState {
  NORMAL,
  ENCRYPTING,
  ENCRYPTED,
  DECRYPTING
}

export const DecryptEffect: React.FC<DecryptEffectProps> = ({
  text,
  isActive,
  className = '',
  normalDuration = 2000,
  encryptedDuration = 2000,
  transitionSpeed = 50
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [currentState, setCurrentState] = useState<TextState>(TextState.NORMAL);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const generateRandomChar = () => {
    return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  };

  const generateRandomWord = () => {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 999999).toString().padStart(6, '0');
  };

  // Continuous encryption animation
  const animateEncryption = useCallback(() => {
    if (currentState !== TextState.ENCRYPTED) return;

    const interval = setInterval(() => {
      setDisplayText(() => {
        const rand = Math.random();
        if (rand < 0.4) {
          
          return Array(text.length).fill(0).map(generateRandomChar).join('');
        } else if (rand < 0.7) {
          
          return `${generateRandomWord()} ${generateRandomNumber()}`;
        } else {
          
          return generateRandomNumber() + generateRandomNumber();
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentState, text.length]);

  // Handle transition to encrypted state
  const transitionToEncrypted = useCallback(() => {
    setIsTransitioning(true);
    let progress = 0;
    const textArray = text.split('');
    
    const interval = setInterval(() => {
      if (progress >= textArray.length) {
        setIsTransitioning(false);
        setCurrentState(TextState.ENCRYPTED);
        clearInterval(interval);
        return;
      }

      setDisplayText(prev => {
        const newArray = prev.split('');
        for (let i = 0; i <= progress; i++) {
          newArray[i] = generateRandomChar();
        }
        return newArray.join('');
      });
      progress++;
    }, transitionSpeed);

    return () => clearInterval(interval);
  }, [text, transitionSpeed]);

  // Handle transition back to normal text
  const transitionToNormal = useCallback(() => {
    setIsTransitioning(true);
    let progress = 0;
    const targetArray = text.split('');
    
    const interval = setInterval(() => {
      if (progress >= targetArray.length) {
        setIsTransitioning(false);
        setCurrentState(TextState.NORMAL);
        clearInterval(interval);
        return;
      }

      setDisplayText(prev => {
        const newArray = prev.split('');
        for (let i = 0; i <= progress; i++) {
          newArray[i] = targetArray[i];
        }
        return newArray.join('');
      });
      progress++;
    }, transitionSpeed);

    return () => clearInterval(interval);
  }, [text, transitionSpeed]);

  // Manage the state cycle
  useEffect(() => {
    if (!isActive) return;
    if (isTransitioning) return;

    let timer: ReturnType<typeof setTimeout>;
    let animationCleanup: (() => void) | undefined;

    switch (currentState) {
      case TextState.NORMAL:
        timer = setTimeout(() => {
          setCurrentState(TextState.ENCRYPTING);
        }, normalDuration);
        break;
        
      case TextState.ENCRYPTING:
        transitionToEncrypted();
        break;
        
      case TextState.ENCRYPTED:
        animationCleanup = animateEncryption();
        timer = setTimeout(() => {
          setCurrentState(TextState.DECRYPTING);
        }, encryptedDuration);
        break;
        
      case TextState.DECRYPTING:
        transitionToNormal();
        break;
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (animationCleanup) animationCleanup();
    };
  }, [
    isActive, currentState, isTransitioning,
    transitionToEncrypted, transitionToNormal, animateEncryption,
    normalDuration, encryptedDuration
  ]);

  // Initialize with normal text
  useEffect(() => {
    if (isActive) {
      setDisplayText(text);
      setCurrentState(TextState.NORMAL);
    }
  }, [isActive, text]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
};