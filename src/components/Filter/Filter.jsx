import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue, setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <div className={css.wrapper}>
      <label>
        Find contacts by name
        <input
          type="text"
          name={filterValue}
          value={filterValue}
          onChange={handleFilterInput}
        />
      </label>
    </div>
  );
}
