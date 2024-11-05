import React, { useEffect, useState } from 'react';
import Button from "@/components/Button";
import ProfileEditForm from "@/features/profile/components/ProfileEditForm";
import Container from "@/components/Container";
import { Profile } from "@/types/profile";
import Cookies from "js-cookie";
import { PROFILE_COOKIE_KEY } from "@/features/profile/const/profile";
import {useCharacters} from "@/contexts/CharacterContext";

const initialProfile: Profile = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1980-01-01',
  city: 'San Francisco',
  state: 'CA',
  favoriteCharacter: 'Elsa',
  favoriteMovie: 'Moana',
  favoriteDisneyland: 'Disney World, FL',
  lastUpdated: 'May 20, 2024',
};

type FieldDataProps = {
  name: string;
  value: string | number;
}

const FieldData = ({name, value}: FieldDataProps) => (
  <p className="text-gray-800 text-lg font-bold mb-1">
   {name}: {value}
  </p>
)

const ProfilePageContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const { enableSearch, setEnableSearch } = useCharacters()

  useEffect(() => {
    if (enableSearch) {
      setEnableSearch(false)
    }
  }, [enableSearch]);

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
    <Container>
      <div className="bg-gray-100 p-10 md:p-20 rounded-lg">
        {!isEditing ? (
            <>
              <h1 className="text-5xl font-bold mb-4 text-gray-800">{profile.firstName} {profile.lastName}</h1>
              <p className="text-gray-500 text-xs mb-10">Last Updated: {profile.lastUpdated}</p>
              <FieldData name="Age" value={new Date().getFullYear() - new Date(profile.birthDate).getFullYear()} />
              <FieldData name="Location" value={`${profile.city}, ${profile.state}`} />
              <FieldData name="Favorite Disney Character" value={profile.favoriteCharacter} />
              <FieldData name="Favorite Disney Movie" value={profile.favoriteMovie} />
              <FieldData name="Favorite Disneyland" value={profile.favoriteDisneyland} />
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
    </Container>
  );
};

export default ProfilePageContent;