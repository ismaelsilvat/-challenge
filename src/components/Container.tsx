import React, {ReactNode} from 'react';

const Container = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <main className={`container mx-auto ${className}`}>
      {children}
    </main>
  );
};

export default Container;