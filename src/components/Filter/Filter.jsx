import React from 'react';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/Contacts/selectors';
import { filterChange } from 'redux/Contacts/filterSlice';

function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onFilterChange = e => {
    const newFilter = e.target.value.toLowerCase();
    console.log('thats filter', e.target.value);
    dispatch(filterChange(newFilter));
  };
  return (
    <div className={css.container}>
      <p className={css.call}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}

export default Filter;
