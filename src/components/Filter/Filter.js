import React from 'react';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterName } from '../../redux/itemsSlice';
const Filter = ({ value, onChangeFilter }) => {
  const dispatch = useDispatch();
  return (
    <label htmlFor="">
      Фильтр по имени:
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
