// src/components/OctagonalCard/OctagonalComponent.tsx
import React from 'react';
import './OctagonalComponent.scss'; // Import SCSS for styling

interface OctagonalComponentProps {
  title: string; // Title to display inside the octagon
  backgroundColor: string; // Background color for the octagon
  children?: React.ReactNode; 
}

const OctagonalComponent: React.FC<OctagonalComponentProps> = ({ title, backgroundColor,children }) => {
  return (
    <div className="octagon-container">
      <div className="octagon" style={{ backgroundColor }}>
        <div className="octagon-content">
          <span>{title}</span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default OctagonalComponent;
