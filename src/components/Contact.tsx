import React, { useState, useEffect, useRef } from 'react';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, CheckCircle2, XCircle } from 'lucide-react';
import { Typewriter } from './hook/Animated_typeWritter';
import AnimatedNeumorphicIcon from './hook/AnimaterIcon';
import AnimatedButton from './hook/AnimatedButton';

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
  name: string;
}

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`
        fixed bottom-4 right-4 
        p-4 rounded-lg
        shadow-lg
        transition-all duration-300 ease
        transform translate-y-0
        flex items-center gap-3
        ${type === 'success' 
          ? 'bg-emerald-500 text-white' 
          : 'bg-rose-500 text-white'
        }
      `}
      role="alert"
    >
      <div className="flex-shrink-0">
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-white" />
        ) : (
          <XCircle className="w-5 h-5 text-white" />
        )}
      </div>

      <p className="text-sm font-medium">{message}</p>

      <button
        onClick={onClose}
        className="ml-4 p-1 rounded-full 
                   hover:bg-white/20
                   transition-colors duration-200 
                   flex-shrink-0"
      >
        <span className="sr-only">Close</span>
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

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
  isVisible = false,
  name
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
    [&:-webkit-autofill]:bg-clip-text
    [&:-webkit-autofill]:[background-clip:text]
    [&:-webkit-autofill]:[text-fill-color:inherit]
    [&:-webkit-autofill]:[webkit-text-fill-color:inherit]
    dark:[&:-webkit-autofill]:[text-fill-color:rgb(229,231,235)]
    dark:[&:-webkit-autofill]:[webkit-text-fill-color:rgb(229,231,235)]
    [&:-webkit-autofill]:[transition-delay:9999s]
    [&:-webkit-autofill]:[-webkit-transition-delay:9999s]
    dark:[-webkit-text-fill-color:rgb(229,231,235)]
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
          name={name}
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
          name={name}
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
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [, setScrollProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure the form is registered with Netlify on mount
    const form = document.querySelector('form[name="contact"]') as HTMLFormElement;
    if (form) {
      form.setAttribute('data-netlify', 'true');
      form.setAttribute('netlify', '');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const buttonTimer = setTimeout(() => setButtonsVisible(true), 3400);
            
            const scrolled = Math.min(
              Math.max((1 - entry.intersectionRatio) * 1.2, 0),
              1
            );
            setScrollProgress(scrolled);
            
            return () => clearTimeout(buttonTimer);
          } else {
            setScrollProgress(1);
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: "-25% 0px -15% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef) {
        observer.disconnect();
      }
    };
  }, []);

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(window.location.href, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
          "bot-field": ""
        })
      });

      if (response.ok) {
        setAlert({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to send message. Please try again.' });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ICON_ANIMATION_DURATION = 300;
  const TYPEWRITER_DURATION = 800;
  const EMAIL_START = 300;
  const PHONE_START = EMAIL_START + TYPEWRITER_DURATION;
  const SOCIAL_LINKS_START = PHONE_START + TYPEWRITER_DURATION;
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
            {/* GitHub Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={GithubIcon} 
                delay={SOCIAL_LINKS_START}
                isVisible={isVisible}
                href="https://github.com/Kevin5621"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isVisible && (
                    <Typewriter 
                      text="GitHub" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + ICON_ANIMATION_DURATION}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200"
                    />
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {isVisible && (
                    <Typewriter 
                      text="Kevin5621" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + ICON_ANIMATION_DURATION}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </p>
              </div>
            </div>
            {/* LinkedIn Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={LinkedinIcon} 
                delay={SOCIAL_LINKS_START + ICON_ANIMATION_DURATION}
                isVisible={isVisible}
                href="https://www.linkedin.com/in/yohanes-kevin-gilang-pratama-9711a1293/"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isVisible && (
                    <Typewriter 
                      text="LinkedIn" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 2)}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200"
                    />
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {isVisible && (
                    <Typewriter 
                      text="Yohanes Kevin Gilang Pratama" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 2)}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </p>
              </div>
            </div>
            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <AnimatedNeumorphicIcon 
                Icon={MailIcon} 
                delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 3)}
                isVisible={isVisible}
                href="mailto:yohaneskevin11222@gmail.com"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isVisible && (
                    <Typewriter 
                      text="Email" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 4)}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200"
                    />
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {isVisible && (
                    <Typewriter 
                      text="yohaneskevin11222@gmail.com" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 4)}
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
                delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 5)}
                isVisible={isVisible}
                href="tel:+6287810211352"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isVisible && (
                    <Typewriter 
                      text="Phone" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 6)}
                      className="text-lg font-medium text-gray-700 dark:text-gray-200"
                    />
                  )}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {isVisible && (
                    <Typewriter 
                      text="+62 878-1021-1352" 
                      speed={50} 
                      delay={SOCIAL_LINKS_START + (ICON_ANIMATION_DURATION * 6)}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Form section */}
          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <p hidden>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <AnimatedInput
              id="name"
              name="name"
              label="Name"
              value={formData.name}
              delay={FORM_START_DELAY}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              isVisible={isVisible}
            />

            <AnimatedInput
              id="email"
              name="email"
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
              name="message"
              label="Message"
              value={formData.message}
              delay={FORM_START_DELAY + (INPUT_SEQUENCE_DELAY * 2)}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              isTextArea
              isVisible={isVisible}
            />

            <AnimatedButton
              text={isSubmitting ? "Sending..." : "Send Message"}
              delay={1000}
              buttonVisible={buttonsVisible}
              width="full"
              type="submit"
              icon={null}
              variant="subtle"
              parentRef={sectionRef}
              isSubmitting={isSubmitting}
            />
          </form>
        </div>
      </div>

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </section>
  );
};

export default Contact;