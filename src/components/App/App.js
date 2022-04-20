import { useEffect, useState } from 'react';
import s from './App.module.css';
import { isEqual } from 'lodash';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, filterName } from '../../redux/itemsSlice';

export default function App1() {
  const dispatch = useDispatch();
  const newContact = useSelector(state => state.items.contacts);
  const newFilter = useSelector(state => state.filter);
  console.log(newFilter);
  const [contacts, setContacts] = useState([
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contactsNew = localStorage.getItem('contacts');
  //   const parsedData = JSON.parse(contactsNew);
  //   setContacts(parsedData);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const changeFilter = e => {
    dispatch(filterName(e.currentTarget.value));
    setFilter(e.currentTarget.value);
  };

  const formSubmitHandler = data => {
    const contactName = data.name;

    const matchingContact = newContact.find(cont =>
      isEqual(contactName.toLowerCase(), cont.name.toLowerCase())
    );
    if (matchingContact) {
      return alert(`${contactName} is already declared`);
    }

    const contact = { ...data, id: nanoid() };
    dispatch(add(contact));
    setContacts(PrevContacts => [...PrevContacts, contact]);
  };

  const deleteObject = contactId => {
    dispatch(remove(contactId));
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const normilizedFilter = newFilter.toLowerCase();
  const filteredContacts = newContact.filter(contact =>
    contact.name.toLowerCase().includes(normilizedFilter)
  );

  return (
    <>
      <Form onSubmit={formSubmitHandler} contacts={filteredContacts} />
      <Filter value={filter} onChangeFilter={changeFilter} />
      <Contacts contacts={filteredContacts} onDelete={deleteObject} />
    </>
  );
}
