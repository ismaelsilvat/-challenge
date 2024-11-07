import React from 'react';
import Logo from './Logo';
import { strings } from "@/const/strings";

const Footer: React.FC = () => (
  <footer className="flex flex-col items-center py-8">
    <Logo />
    <p className="mt-2 text-sm text-footer">
      {strings.footer}
    </p>
  </footer>
);

export default Footer;
