import React, { useEffect, useState } from 'react';
import Button from "@/components/Button";
import ProfileEditForm from "@/features/profile/components/ProfileEditForm";
import Container from "@/components/Container";
import { Profile } from "@/features/profile/types/profile";
import Cookies from "js-cookie";
import { PROFILE_COOKIE_KEY } from "@/features/profile/const/profile";
import { useCharacters } from "@/contexts/CharacterContext";
import {strings} from "@/const/strings";

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
  <p className="text-defaultText text-lg font-bold mb-4">
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
      <div className="bg-grayBackground p-10 md:p-20 rounded-lg">
        {!isEditing ? (
            <>
              <h1 className="text-xl font-bold text-defaultText">{profile.firstName} {profile.lastName}</h1>
              <p className="text-defaultText text-sm mb-8">{strings.lastUpdated} {profile.lastUpdated}</p>
              <FieldData name={strings.age} value={new Date().getFullYear() - new Date(profile.birthDate).getFullYear()} />
              <FieldData name={strings.location} value={`${profile.city}, ${profile.state}`} />
              <FieldData name={strings.favoriteDisneyCharacter} value={profile.favoriteCharacter} />
              <FieldData name={strings.favoriteDisneyMovie} value={profile.favoriteMovie} />
              <FieldData name={strings.favoriteDisneyland} value={profile.favoriteDisneyland} />
              <Button onClick={handleEdit} className="mt-4 btn-primary">{strings.editProfile}</Button>
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