import React from 'react';
import Button from '@/components/Button';
import Form from "@/components/Form";
import {Profile} from "@/types/profile";
import Input from "@/components/Input";
import dayjs from "dayjs";

type ProfileEditFormProps = {
  onSubmit: (data: Profile) => void;
  defaultValues: Profile;
  onCancel: () => void;
};

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ onSubmit, defaultValues, onCancel }) => (
  <Form<Profile> onSubmit={(values) => onSubmit({...values, lastUpdated: dayjs().format("MMMM D, YYYY")})} defaultValues={defaultValues} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm">
    {() => (
      <div className="w-full md:w-3/4 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="firstName" label="First Name" placeholder="First Name" required />
          <Input name="lastName" label="Last Name" placeholder="Last Name" required />
        </div>

        <Input name="birthDate" label="Birth Date" type="date" required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="city" label="City" placeholder="City" />
          <Input name="state" label="State" options={['CA', 'FL', 'NY']} />
        </div>

        <Input name="favoriteCharacter" label="Favorite Disney Character" placeholder="e.g., Elsa" />
        <Input name="favoriteMovie" label="Favorite Disney Movie" placeholder="e.g., Moana" />
        <Input name="favoriteDisneyland" label="Favorite Disneyland" options={['Disneyland, CA', 'Disney World, FL']} />

        <div className="flex space-x-4 mt-4">
          <Button type="submit">Update Profile</Button>
          <Button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-700">Cancel</Button>
        </div>
      </div>
    )}
  </Form>
);

export default ProfileEditForm;
