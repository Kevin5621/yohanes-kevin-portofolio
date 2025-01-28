import React, { useState, useEffect, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, LucideIcon } from 'lucide-react';
import { Typewriter } from './hook/Animated_typeWritter';

interface AnimatedNeumorphicIconProps {
  Icon: LucideIcon;
  delay?: number;
  className?: string;
  isVisible?: boolean;
}

const AnimatedNeumorphicIcon: React.FC<AnimatedNeumorphicIconProps> = ({ 
  Icon, 
  delay = 0, 
  className = "",
  isVisible = false
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isVisible]);

  return (
    <div 
      className={`transition-all duration-700 ease-out ${className} ${
        isAnimated 
          ? "p-4 rounded-lg shadow-neumorph dark:shadow-neumorph-dark" 
          : "p-2 rounded-lg opacity-50 scale-90 bg-gray-200/30 dark:bg-dark/30"
      }`}
      style={{
        transformOrigin: 'center',
      }}
    >
      <Icon 
        className={`transition-all duration-500 ease-out ${
          isAnimated 
            ? "text-gray-600 dark:text-gray-300" 
            : "text-gray-400 dark:text-gray-600 opacity-70"
        }`}
        size={24}
      />
    </div>
  );
};

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface AnimatedInputProps {
  id: string;
  type?: string;
  label: string;
  value: string;
  delay: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isTextArea?: boolean;
  rows?: number;
  isVisible?: boolean;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  id,
  type = "text",
  label,
  value,
  delay,
  onChange,
  required = false,
  isTextArea = false,
  rows = 5,
  isVisible = false
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const LABEL_DURATION = 500;

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, delay + LABEL_DURATION);

    return () => clearTimeout(timer);
  }, [delay, isVisible]);

  const inputClasses = `
    w-full px-4 py-3 rounded-lg 
    transition-all duration-1000 ease-in-out 
    transform-gpu
    ${isAnimated
      ? "translate-y-[1px] shadow-neumorph-inset dark:shadow-neumorph-dark-inset bg-gray-100 dark:bg-dark opacity-100"
      : "translate-y-0 shadow-none bg-transparent opacity-0"
    } 
    text-gray-700 dark:text-gray-200 
    focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600
    hover:shadow-neumorph-inset-hover dark:hover:shadow-neumorph-dark-inset-hover
  `;

  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 dark:text-gray-200 mb-2">
        {isVisible && (
          <Typewriter 
            text={label}
            speed={50}
            delay={delay}
            className="block text-gray-700 dark:text-gray-200"
          />
        )}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          rows={rows}
          className={inputClasses}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={inputClasses}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const ICON_ANIMATION_DURATION = 300;
  const TYPEWRITER_DURATION = 800;
  const EMAIL_START = 300;
  const PHONE_START = EMAIL_START + TYPEWRITER_DURATION;
  const LOCATION_START = PHONE_START + TYPEWRITER_DURATION;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const FORM_START_DELAY = 1000;
  const INPUT_SEQUENCE_DELAY = 800;

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 px-6 bg-gray-100 dark:bg-dark transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
          {isVisible && (
            <Typewriter 
              text="Get in Touch" 
              speed={100} 
              delay={0}
              className="text-4xl font-bold text-gray-800 dark:text-gray-100"
            />
          )}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              {isVisible && (
                <Typewriter 
                  text="Contact Information" 
                  speed={50} 
                  delay={700}
                  className="text-2xl font-semibold text-gray-700 dark:text-gray-200"
                />
              )}
            </h3>
            
            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={MailIcon} 
                delay={EMAIL_START}
                isVisible={isVisible}
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isVisible && (
                    <Typewriter 
                      text="Email" 
                      speed={50} 
                      delay={EMAIL_START + ICON_ANIMATION_DURATION}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200"
                    />
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {isVisible && (
                    <Typewriter 
                      text="yohaneskevin11222@gmail.com" 
                      speed={50} 
                      delay={EMAIL_START + ICON_ANIMATION_DURATION}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={PhoneIcon} 
                delay={PHONE_START}
                isVisible={isVisible}
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isVisible && (
                    <Typewriter 
                      text="Phone" 
                      speed={50} 
                      delay={PHONE_START + ICON_ANIMATION_DURATION}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200"
                    />
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {isVisible && (
                    <Typewriter 
                      text="+62 878-1021-1352" 
                      speed={50} 
                      delay={PHONE_START + ICON_ANIMATION_DURATION}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </p>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={MapPinIcon} 
                delay={LOCATION_START}
                isVisible={isVisible}
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isVisible && (
                    <Typewriter 
                      text="Location" 
                      speed={50} 
                      delay={LOCATION_START + ICON_ANIMATION_DURATION}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200"
                    />
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {isVisible && (
                    <Typewriter 
                      text="Central Java, Semarang" 
                      speed={50} 
                      delay={LOCATION_START + ICON_ANIMATION_DURATION}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Form section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatedInput
              id="name"
              label="Name"
              value={formData.name}
              delay={FORM_START_DELAY}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              isVisible={isVisible}
            />

            <AnimatedInput
              id="email"
              type="email"
              label="Email"
              value={formData.email}
              delay={FORM_START_DELAY + INPUT_SEQUENCE_DELAY}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              isVisible={isVisible}
            />

            <AnimatedInput
              id="message"
              label="Message"
              value={formData.message}
              delay={FORM_START_DELAY + (INPUT_SEQUENCE_DELAY * 2)}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              isTextArea
              isVisible={isVisible}
            />

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset transition-shadow"
            >
              {isVisible && (
                <Typewriter 
                  text="Send Message" 
                  speed={50} 
                  delay={FORM_START_DELAY + (INPUT_SEQUENCE_DELAY * 3)}
                  className="w-full text-center"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;