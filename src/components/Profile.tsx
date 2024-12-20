import React from 'react';
import Link from "next/link";

const UserProfile: React.FC = () => (
  <Link href="/profile" className="relative">
    <img
      src="/avatar.png"
      alt="User Avatar"
      className="h-10 w-10 rounded-full border border-grayBorder cursor-pointer"
    />
  </Link>
);

export default UserProfile;
