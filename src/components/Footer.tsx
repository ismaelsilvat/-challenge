import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center py-8">
      <Logo />
      <p className="mt-2 text-sm text-gray-600">
        For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption
      </p>
    </footer>
  );
};

export default Footer;
