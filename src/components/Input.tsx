import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  options?: string[];
};

const Input: React.FC<InputProps> = ({ name, label, placeholder, type = 'text', required = false, options }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <div>
          <label className="block text-base font-semibold text-textSecondary">
            {label} {required && <span className="text-error">*</span>}
          </label>
          {options ? (
            <select
              data-testid={name}
              {...field}
              className="mt-1 w-full border border-grayBorder rounded-md h-10 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            >
              <option value="">Select {label}</option>
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              data-testid={name}
              type={type}
              placeholder={placeholder}
              className="mt-1 w-full border border-grayBorder rounded-md h-10 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              required={required}
              {...field}
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
