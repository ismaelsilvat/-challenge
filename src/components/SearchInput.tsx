import React from 'react';

type SearchInputProps = {
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  value: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...', disabled = false, value, className, onChange, onClear }) => {
  return (
    <div className="relative w-full">
      <input
        disabled={disabled}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-12 px-4 py-2 text-placeholder text-base font-medium rounded-full bg-grayBackground border-none focus:outline-none ${className}`}
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base text-placeholder"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchInput;
