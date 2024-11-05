import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

type InputFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  options?: string[];
};

const Input: React.FC<InputFieldProps> = ({ name, label, placeholder, type = 'text', required = false, options }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {options ? (
            <select
              {...field}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            >
              <option value="">Select {label}</option>
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              required={required}
            />
          )}
          {errors[name] && (
            <p className="text-red-500 text-sm mt-1">{errors[name]?.message as string}</p>
          )}
        </div>
      )}
    />
  );
};

export default Input;
