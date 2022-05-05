import { useGetContactsQuery } from '../../redux/contacts';
import { isEqual } from 'lodash';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import { ContactList } from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, filterName } from '../../redux/itemsSlice';

export const App1 = () => {
  const dispatch = useDispatch();
  const newContact = useSelector(state => state.items.contacts);

  const newFilter = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(filterName(e.currentTarget.value));
  };
  const formSubmitHandler = data => {
    const contactName = data.name;

    const matchingContact = newContact.find(cont =>
      isEqual(
        contactName.toLowerCase(),
        cont.data?.name.toLowerCase() || cont.name.toLowerCase()
      )
    );
    if (matchingContact) {
      return alert(`${contactName} is already declared`);
    }

    const contact = { ...data, id: nanoid() };
    dispatch(add(contact));
    // setContacts(PrevContacts => [...PrevContacts, contact]);
  };

  const deleteObject = contactId => {
    dispatch(remove(contactId));
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const normilizedFilter = newFilter.toLowerCase();
  const filteredContacts = newContact.filter(
    contact =>
      contact.data?.name.toLowerCase().includes(normilizedFilter) ||
      contact.name.toLowerCase().includes(normilizedFilter)
  );
  return (
    <>
      <Filter value={newFilter} onChangeFilter={changeFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDelete={deleteObject}
      />
    </>
  );
};
