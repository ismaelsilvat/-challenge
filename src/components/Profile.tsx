import React from 'react';
import Link from "next/link";

const UserProfile: React.FC = () => {
  return (
    <Link href="/profile" className="relative">
      <img
        src="/avatar.png"
        alt="User Avatar"
        className="h-10 w-10 rounded-full border border-gray-300 cursor-pointer"
      />
    </Link>
  );
};

export default UserProfile;
