import { Link } from 'react-router-dom';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Bars } from 'react-loader-spinner';
import { Ul } from './ContactList.styled';
import Filter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export const ContactList = ({ contacts, isLoading }) => {
  const dispatch = useDispatch();
  const contactsVisible = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteTodo = id => dispatch(contactsOperations.deleteTodo(id));
  // const onToggleCompleted = id => dispatch(todosOperations.toggleCompleted(id));
  return (
    <>
      <h2>Contacts</h2>
      <Link to="/contacts/create">Create contact</Link>
      <Outlet />
      {isLoading && <Bars />}
      <Ul>
        {contacts &&
          contacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
      </Ul>
    </>
  );
};
