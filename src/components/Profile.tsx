import React from 'react';

const UserProfile: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/avatar.png"
        alt="User Avatar"
        className="h-10 w-10 rounded-full border border-gray-300 cursor-pointer"
      />
    </div>
  );
};

export default UserProfile;
