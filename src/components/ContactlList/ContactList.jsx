import { Link } from 'react-router-dom';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Bars } from 'react-loader-spinner';
import { Ul } from './ContactList.styled';
import Filter from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const ContactList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <Link to="/contacts/create">Create contact</Link>
      <Outlet />
      {isFetching && <Bars />}
      <Ul>
        {contacts &&
          contacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
      </Ul>
    </>
  );
};
