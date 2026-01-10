import React from 'react';

interface HackingSimulatorProps {
  children: React.ReactNode;
  className?: string;
  text?: string;
}

const HackingSimulator: React.FC<HackingSimulatorProps> = ({ 
  children, 
  className = '',
  text = ''
}) => {
  // Generate random alternative texts for the hacking effect
  const altTexts = Array.from({ length: 4 }, () => {
    return Array.from({ length: text.length || 10 }, () => 
      String.fromCharCode(48 + Math.floor(Math.random() * 75))
    ).join('');
  });

  const combinedClassName = `hacking-sim relative ${className}`;
  
  return (
    <div 
      className={combinedClassName}
      data-text={text || (typeof children === 'string' ? children : '')}
      data-alt1={altTexts[0]}
      data-alt2={altTexts[1]}
      data-alt3={altTexts[2]}
      data-alt4={altTexts[3]}
    >
      {children}
    </div>
  );
};

export default HackingSimulator;