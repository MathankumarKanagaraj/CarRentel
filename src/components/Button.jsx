import React from 'react';

const Button = ({ label, onClick, className, type = "button", disabled = false }) => {
  return (
    <button 
      className={className} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
