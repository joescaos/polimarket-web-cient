import React from "react";
import "./styles.css";

const LoadingSpinner = ({ size = 'medium', color = '#E30613' }) => {
    const sizeClasses = {
      small: 'spinner-small',
      medium: 'spinner-medium',
      large: 'spinner-large'
    };
  
    return (
      <div className="spinner-container" data-testid="loading-spinner">
        <div 
          className={`spinner ${sizeClasses[size]}`} 
          style={{ borderTopColor: color }}
        ></div>
        <p className="spinner-text">Cargando...</p>
      </div>
    );
  };
  
  export default LoadingSpinner;