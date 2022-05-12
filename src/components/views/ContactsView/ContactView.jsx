import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Container/Container';
import { ContactList } from '../../ContactlList/ContactList';
// import TodoEditor from '../components/TodoEditor';
import Filter from '../../Filter/Filter';
// import Stats from '../components/Stats';
// import Modal from '../../Modal/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
import contactsOperations from '../../../redux/contacts/contacts-operations';
import contactsSelectors from '../../../redux/contacts/contacts-selectors';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const fetchedContacts = useSelector(contactsSelectors.getAllContacts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  console.log(fetchedContacts);
  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        {/* <Stats /> */}
        {/* <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton> */}

        {isLoadingContacts && <h1>Загружаем...</h1>}
      </div>
      <ContactList contacts={fetchedContacts} isLoading={isLoadingContacts} />
      {/* {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal> */}
      {/* )} */}
    </Container>
  );
}
