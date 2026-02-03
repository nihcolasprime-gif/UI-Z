
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`glass-effect glass-card-hover p-8 rounded-2xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
