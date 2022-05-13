import { Link } from 'react-router-dom';
import { ContactItem } from 'components/ContactItem/ContactItem';
import Typography from '@mui/material/Typography';
import { Bars } from 'react-loader-spinner';
import { Ul } from './ContactList.styled';
import Filter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export const ContactList = ({ isLoading }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  console.log(contacts);
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  // const onToggleCompleted = id => dispatch(todosOperations.toggleCompleted(id));
  return (
    <>
      <h2>Contacts</h2>
      <Typography>
        <Link to="/contacts/create">Create contact</Link>
      </Typography>

      <Outlet />
      {isLoading && <Bars />}
      <Ul>
        {contacts &&
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              {...contact}
              onDelete={onDeleteContact}
            />
          ))}
      </Ul>
    </>
  );
};
