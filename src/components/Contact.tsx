import React, { useState, useEffect } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, LucideIcon } from 'lucide-react';
import { Typewriter } from './hook/Animated_typeWritter';

interface AnimatedNeumorphicIconProps {
  Icon: LucideIcon;
  delay?: number;
  className?: string;
}

const AnimatedNeumorphicIcon: React.FC<AnimatedNeumorphicIconProps> = ({ 
  Icon, 
  delay = 0, 
  className = "" 
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Animation timing constants
  const ICON_ANIMATION_DURATION = 300;
  const TYPEWRITER_DURATION = 800;
  
  // Base delays for each section
  const EMAIL_START = 300;
  const PHONE_START = EMAIL_START + TYPEWRITER_DURATION;
  const LOCATION_START = PHONE_START + TYPEWRITER_DURATION;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
          <Typewriter 
            text="Get in Touch" 
            speed={100} 
            delay={0}
            className="text-4xl font-bold text-gray-800 dark:text-gray-100"
          />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              <Typewriter 
                text="Contact Information" 
                speed={50} 
                delay={700}
                className="text-2xl font-semibold text-gray-700 dark:text-gray-200"
              />
            </h3>
            
            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={MailIcon} 
                delay={EMAIL_START}
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  <Typewriter 
                    text="Email" 
                    speed={50} 
                    delay={EMAIL_START + ICON_ANIMATION_DURATION}
                    className="text-lg font-medium text-gray-700 dark:text-gray-200"
                  />
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <Typewriter 
                    text="yohaneskevin11222@gmail.com" 
                    speed={50} 
                    delay={EMAIL_START + ICON_ANIMATION_DURATION}
                    className="text-gray-600 dark:text-gray-300"
                  />
                </p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={PhoneIcon} 
                delay={PHONE_START}
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  <Typewriter 
                    text="Phone" 
                    speed={50} 
                    delay={PHONE_START + ICON_ANIMATION_DURATION}
                    className="text-lg font-medium text-gray-700 dark:text-gray-200"
                  />
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <Typewriter 
                    text="+62 878-1021-1352" 
                    speed={50} 
                    delay={PHONE_START + ICON_ANIMATION_DURATION}
                    className="text-gray-600 dark:text-gray-300"
                  />
                </p>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={MapPinIcon} 
                delay={LOCATION_START}
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  <Typewriter 
                    text="Location" 
                    speed={50} 
                    delay={LOCATION_START + ICON_ANIMATION_DURATION}
                    className="text-lg font-medium text-gray-700 dark:text-gray-200"
                  />
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <Typewriter 
                    text="Central Java, Semarang" 
                    speed={50} 
                    delay={LOCATION_START + ICON_ANIMATION_DURATION}
                    className="text-gray-600 dark:text-gray-300"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Form section remains the same */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rest of the form remains the same as previous artifact */}
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-2">
                <Typewriter 
                  text="Name" 
                  speed={50} 
                  delay={700}
                  className="block text-gray-700 dark:text-gray-200"
                />
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg shadow-neumorph-inset dark:shadow-neumorph-dark-inset bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">
                <Typewriter 
                  text="Email" 
                  speed={50} 
                  delay={500}
                  className="block text-gray-700 dark:text-gray-200"
                />
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg shadow-neumorph-inset dark:shadow-neumorph-dark-inset bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-2">
                <Typewriter 
                  text="Message" 
                  speed={50} 
                  delay={800}
                  className="block text-gray-700 dark:text-gray-200"
                />
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg shadow-neumorph-inset dark:shadow-neumorph-dark-inset bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-200 shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset transition-shadow"
            >
              <Typewriter 
                text="Send Message" 
                speed={50} 
                delay={2200}
                className="w-full text-center"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;