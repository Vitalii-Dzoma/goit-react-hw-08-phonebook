import React from 'react';
import s from './Filter.module.css';

const Filter = ({value, onChangeFilter}) => (
      <label htmlFor="">
        Фильтр по имени:
        <input type="text" value={value} onChange={onChangeFilter}/>
      </label>
)

export default Filter