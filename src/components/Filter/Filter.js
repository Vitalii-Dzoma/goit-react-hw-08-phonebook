import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from '../../redux/itemsSlice';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  console.log(value);
  return (
    <label htmlFor="">
      Фильтр по имени:
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
