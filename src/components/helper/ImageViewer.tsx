import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XIcon, PlayIcon, PauseIcon } from 'lucide-react';

interface Media {
  image?: string;
  video?: string;
  title: string;
}

interface ImageViewerProps {
  media: Media[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  media,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentMedia = media[currentIndex];
    if (currentMedia.video && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const renderMedia = () => {
    const currentMedia = media[currentIndex];
    
    if (currentMedia.video) {
      return (
        <div className="relative max-w-[90vw] max-h-[90vh]">
          <video
            ref={videoRef}
            src={currentMedia.video}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={handleMediaClick}
            onEnded={() => setIsPlaying(false)}
          />
          <button
            onClick={handleMediaClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
          >
            {isPlaying ? (
              <PauseIcon size={48} className="text-white" />
            ) : (
              <PlayIcon size={48} className="text-white" />
            )}
          </button>
        </div>
      );
    }

    return (
      <img
        src={currentMedia.image}
        alt={currentMedia.title}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
      >
        <XIcon size={24} />
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
      >
        <ChevronLeftIcon size={24} />
      </button>

      {renderMedia()}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors"
      >
        <ChevronRightIcon size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/50 px-4 py-2 rounded-full text-white">
        {media[currentIndex].title} ({currentIndex + 1}/{media.length})
      </div>
    </div>
  );
};