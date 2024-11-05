import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg shadow-md shadow-[#0545533D] bg-[#054553] text-white font-medium hover:bg-[#084c60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E556D] ${className} ${disabled && "pointer-events-none opacity-50"}`}
    >
      {children}
    </button>
  );
};

export default Button;
