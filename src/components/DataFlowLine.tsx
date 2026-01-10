import React from 'react';

interface DataFlowLineProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

const DataFlowLine: React.FC<DataFlowLineProps> = ({ 
  className = '', 
  direction = 'horizontal' 
}) => {
  const baseClasses = `data-flow-line ${direction === 'vertical' ? 'h-full w-0.5' : 'w-full h-0.5'} relative`;
  const classes = `${baseClasses} ${className}`;

  return <div className={classes} />;
};

export default DataFlowLine;