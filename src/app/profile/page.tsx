"use client"
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {Profile} from "@/types/profile";
import ProfileEditForm from "@/features/profile/components/ProfileEditForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const PROFILE_COOKIE_KEY = 'userProfile';

const initialProfile: Profile = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1980-01-01',
  city: 'San Francisco',
  state: 'CA',
  favoriteCharacter: 'Elsa',
  favoriteMovie: 'Moana',
  favoriteDisneyland: 'Disney World, FL',
  lastUpdated: 'May 20th, 2024',
};

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>(initialProfile);

  useEffect(() => {
    const savedProfile = Cookies.get(PROFILE_COOKIE_KEY);
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  const handleUpdateProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
    Cookies.set(PROFILE_COOKIE_KEY, JSON.stringify(updatedProfile), { expires: 7 });
  };

  return (
    <main className="container mx-auto px-4">
      <Navbar/>
      <div className="container mx-auto">
        <div className="bg-gray-100 p-20 rounded-lg">
          {!isEditing ? (
            <>
              <h1 className="text-5xl font-bold mb-4 text-gray-800">{profile.firstName} {profile.lastName}</h1>
              <p className="text-gray-500 text-xs mb-10">Last Updated: {profile.lastUpdated}</p>
              <p
                className="text-gray-800 text-lg font-bold mb-1">Age: {new Date().getFullYear() - new Date(profile.birthDate).getFullYear()}</p>
              <p className="text-gray-800 text-lg font-bold mb-1">Location: {profile.city}, {profile.state}</p>
              <p className="text-gray-800 text-lg font-bold mb-1">Favorite Disney
                Character: {profile.favoriteCharacter}</p>
              <p className="text-gray-800 text-lg font-bold mb-1">Favorite Disney Movie: {profile.favoriteMovie}</p>
              <p className="text-gray-800 text-lg font-bold mb-1">Favorite
                Disneyland: {profile.favoriteDisneyland}</p>
              <Button onClick={handleEdit} className="mt-4 btn-primary">Edit Profile</Button>
            </>
            )
            : (
              <ProfileEditForm
                onSubmit={handleUpdateProfile}
                defaultValues={profile}
                onCancel={handleCancel}
              />
            )}
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default ProfilePage;
