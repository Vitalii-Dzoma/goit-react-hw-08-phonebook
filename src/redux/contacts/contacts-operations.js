import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

// GET @ /tasks
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /tasks
const addContact = description => dispatch => {
  const contact = {
    description,
    completed: false,
  };

  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error.message)));
};

// DELETE @ /contacts/:id
const deleteContact = contactId => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch(error => dispatch(deleteContactsError(error.message)));
};

// PATCH @ /tasks/:id
const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error.message)));
  };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  toggleCompleted,
};
export default contactsOperations;
