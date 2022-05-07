import React from 'react';

interface Props {
  onChange: (searchText: string) => void;
}

const SearchFilter: React.FC<Props> = ({ onChange }) => {
  const onChangeHandler = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Title" onChange={onChangeHandler} />
    </>
  );
};

export default SearchFilter;
