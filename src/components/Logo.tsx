import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img src="/logo.png" alt="Disney Logo" className="h-10 w-auto" />
    </Link>
  );
};

export default Logo;
