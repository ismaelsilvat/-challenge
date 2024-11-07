import React from 'react';
import Button from '@/components/Button';
import Form from "@/components/Form";
import {Profile} from "@/features/profile/types/profile";
import Input from "@/components/Input";
import dayjs from "dayjs";
import {strings} from "@/const/strings";

type ProfileEditFormProps = {
  onSubmit: (data: Profile) => void;
  defaultValues: Profile;
  onCancel: () => void;
};

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ onSubmit, defaultValues, onCancel }) => (
  <Form<Profile> dataTestId="profile-form" onSubmit={(values) => onSubmit({...values, lastUpdated: dayjs().format("MMMM D, YYYY")})} defaultValues={defaultValues} className="space-y-6 bg-grayBackground p-8 rounded-lg">
    {() => (
      <div className="w-full md:w-3/4 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="firstName" label={strings.firstName} placeholder={strings.firstName} required />
          <Input name="lastName" label={strings.lastName} placeholder={strings.lastName} required />
        </div>

        <Input name="birthDate" label={strings.birthDate} type="date" required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="city" label={strings.city} placeholder={strings.city}/>
          <Input name="state" label={strings.state} options={['CA', 'FL', 'NY']} />
        </div>

        <Input name="favoriteCharacter" label={strings.favoriteCharacter} placeholder={strings.favoriteCharacter} />
        <Input name="favoriteMovie" label={strings.favoriteMovie} placeholder={strings.favoriteMovie} />
        <Input name="favoriteDisneyland" label={strings.favoriteDisneyland} options={['Disneyland, CA', 'Disney World, FL']} />

        <div className="flex space-x-4 mt-4">
          <Button type="submit">{strings.updateProfile}</Button>
          <Button type="button" onClick={onCancel} variant="outlined">{strings.cancel}</Button>
        </div>
      </div>
    )}
  </Form>
);

export default ProfileEditForm;
