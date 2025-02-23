import { FrameworkIconProps } from '../types';

export const FrameworkIcon: React.FC<FrameworkIconProps> = ({ Icon, name, color, index, isActive }) => {
  const getFrameworkStyles = () => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'scale(1)' : 'scale(0.8)',
    transition: `all 500ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
  });

  return (
    <div
      style={getFrameworkStyles()}
      className="flex flex-col items-center gap-3 p-6 rounded-xl shadow-neumorph dark:shadow-neumorph-dark 
                hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover 
                active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset 
                transition-all duration-300 bg-gray-100 dark:bg-dark"
    >
      <Icon className={`text-5xl ${color}`} />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  );
};