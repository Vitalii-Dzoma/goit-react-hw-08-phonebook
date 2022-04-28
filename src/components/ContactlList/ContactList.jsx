import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts';
import { Link } from 'react-router-dom';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Bars } from 'react-loader-spinner';
import { Ul } from './ContactList.styled';
export const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();

  return (
    <>
      <h2>Contacts</h2>
      <Link to="/contacts/create">Create contact</Link>
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
