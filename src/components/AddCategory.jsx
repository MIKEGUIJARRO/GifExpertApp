import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <>
      <form
      aria-label='form'
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <input
          className="bg-gray-200 px-2 py-1 rounded-md"
          type={'text'}
          placeholder={'Buscar Gifs'}
          value={inputValue}
          onChange={(event) => {
            onInputChange(event);
          }}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}