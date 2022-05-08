import React from 'react';

interface Props {
  onChange: (searchText: string) => void;
}

const SearchFilter: React.FC<Props> = ({ onChange }) => {
  const onChangeHandler = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex border-2 border-gray-200 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Search movie title here..."
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default SearchFilter;
