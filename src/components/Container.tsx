import React, { ReactNode } from 'react';

type ContainerProps = {
  className?: string,
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <main className={`container mx-auto ${className}`}>
      {children}
    </main>
  );
};

export default Container;