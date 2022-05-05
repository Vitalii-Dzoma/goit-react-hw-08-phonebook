// import { useGetContactsQuery } from 'redux/contacts';
import { Link } from 'react-router-dom';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Bars } from 'react-loader-spinner';
import { Ul } from './Contacts.styled';
import Filter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove, add, refill } from 'redux/itemsSlice';
import { useGetContactsQuery } from 'redux/contacts';
import { useEffect } from 'react';

export const ContactList = ({ filteredContacts }) => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (contacts) {
      dispatch(refill(contacts));
    }
  }, [contacts]);

  return (
    <>
      <h2>Contacts</h2>
      <Link to="/contacts/create">Create contact</Link>
      <Outlet />
      {isFetching && <Bars />}
      <Ul>
        {filteredContacts &&
          filteredContacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
      </Ul>
    </>
  );
};
