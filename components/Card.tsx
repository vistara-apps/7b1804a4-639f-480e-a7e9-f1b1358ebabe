import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'interactive';
  className?: string;
  onClick?: () => void;
}

export function Card({ 
  children, 
  variant = 'default', 
  className = '',
  onClick 
}: CardProps) {
  const baseClasses = 'glass-effect rounded-lg p-6 shadow-card';
  const variantClasses = {
    default: '',
    interactive: 'cursor-pointer hover:bg-white/20 transition-all duration-200 transform hover:scale-105',
  };

  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
