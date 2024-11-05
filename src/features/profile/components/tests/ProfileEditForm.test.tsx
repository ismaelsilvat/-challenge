import React from 'react';
import {render, screen, fireEvent, waitFor, act} from '@testing-library/react';
import ProfileEditForm from '../ProfileEditForm';
import dayjs from "dayjs";

describe('ProfileEditForm', () => {
  const defaultValues = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '01/01/1980',
    city: 'San Francisco',
    state: 'CA',
    favoriteCharacter: 'Elsa',
    favoriteMovie: 'Moana',
    favoriteDisneyland: 'Disney World, FL',
    lastUpdated: 'May 20, 2024',
  };

  const onSubmitMock = jest.fn();
  const onCancelMock = jest.fn();

  beforeEach(() => {
    render(
      <ProfileEditForm
        defaultValues={defaultValues}
        onSubmit={onSubmitMock}
        onCancel={onCancelMock}
      />
    );
  });

  test('renders all input fields with default values', () => {
    expect(screen.getByTestId("firstName")).toHaveValue(defaultValues.firstName);
    expect(screen.getByTestId("lastName")).toHaveValue(defaultValues.lastName);
    expect(screen.getByTestId("city")).toHaveValue(defaultValues.city);
    expect(screen.getByTestId("state")).toHaveValue(defaultValues.state);
    expect(screen.getByTestId("favoriteCharacter")).toHaveValue(defaultValues.favoriteCharacter);
    expect(screen.getByTestId("favoriteMovie")).toHaveValue(defaultValues.favoriteMovie);
    expect(screen.getByTestId("favoriteDisneyland")).toHaveValue(defaultValues.favoriteDisneyland);
  });

  test('allows input fields to be changed', () => {
    const firstNameInput = screen.getByPlaceholderText("First Name");
    fireEvent.change(firstNameInput, { target: { value: 'Jane' } });
    expect(firstNameInput).toHaveValue('Jane');
  });

  test('calls onSubmit with updated values when form is submitted', async () => {
    const firstNameInput = screen.getByPlaceholderText("First Name");
    fireEvent.change(firstNameInput, { target: { value: 'Jane' } });

    await act(async () => {
      const form = screen.getByTestId("profile-form");
      fireEvent.submit(form);
    });

    expect(onSubmitMock).toHaveBeenCalledWith({
      ...defaultValues,
      lastUpdated: dayjs().format("MMMM D, YYYY"),
      firstName: "Jane"});
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  test('calls onCancel when Cancel button is clicked', () => {
    const cancelButton = screen.getByRole('button', { name: "Cancel" });
    fireEvent.click(cancelButton);

    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });
});
