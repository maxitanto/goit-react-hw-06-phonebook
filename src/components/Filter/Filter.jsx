import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export function Filter() {
  const filterValue = useSelector(state => state.filter);
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
