import { AnimatedButtonProps } from "../Hero";
import { Typewriter } from "./Animated_typeWritter";

export const AnimatedButton = ({ text, delay, buttonVisible }: AnimatedButtonProps) => {
  return (
    <div
      className={`w-[180px] h-[50px] rounded-lg transform transition-all duration-1000 ease-out overflow-hidden
        ${buttonVisible ? 'scale-100 shadow-neumorph dark:shadow-neumorph-dark' : 'scale-95 shadow-none'}`}
      style={{
        transitionProperty: 'transform, box-shadow',
        transitionDuration: '1000ms'
      }}
    >
      <button className="w-full h-full bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 
                       hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover 
                       active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset 
                       transition-shadow rounded-lg">
        {buttonVisible && (
          <Typewriter
            text={text}
            delay={delay}
            className="block text-lg text-gray-600 dark:text-gray-300" />
        )}
      </button>
    </div>
  );
};
