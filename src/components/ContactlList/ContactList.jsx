import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts';
import { Link } from 'react-router-dom';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Bars } from 'react-loader-spinner';
export const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <h2>Contacts</h2>
      <Link to="/contacts/create">Create contact</Link>
      {isFetching && <Bars />}
      {contacts && (
        <ContactItem
          contacts={contacts}
          onDelete={deleteTodo}
          deleting={isDeleting}
        />
      )}
    </>
  );
};
