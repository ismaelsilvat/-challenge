import React from 'react';
import Button from '@/components/Button';
import Form from "@/components/Form";
import {Profile} from "@/types/profile";
import Input from "@/components/Input";

type ProfileEditFormProps = {
  onSubmit: (data: Profile) => void;
  defaultValues: Profile;
  onCancel: () => void;
};

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ onSubmit, defaultValues, onCancel }) => {
  return (
    <Form<Profile> onSubmit={onSubmit} defaultValues={defaultValues} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm">
      {() => (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="firstName" label="First Name" placeholder="First Name" required />
            <Input name="lastName" label="Last Name" placeholder="Last Name" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="birthDate" label="Birth Date" type="date" required />
            <Input name="state" label="State" options={['CA', 'FL', 'NY']} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="city" label="City" placeholder="City" required />
            <Input name="favoriteCharacter" label="Favorite Disney Character" placeholder="e.g., Elsa" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="favoriteMovie" label="Favorite Disney Movie" placeholder="e.g., Moana" />
            <Input name="favoriteDisneyland" label="Favorite Disneyland" options={['Disneyland, CA', 'Disney World, FL']} />
          </div>

          <div className="flex space-x-4">
            <Button type="submit">Update Profile</Button>
            <Button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-700">Cancel</Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default ProfileEditForm;
