import React from 'react';
import s from './App.module.css';
import { nanoid } from 'nanoid';
const formId = nanoid();
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';

class App1 extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  addContacts = () => {
    this.setState(prev => prev.name);
  };

  formSubmitHandler = data => {
    this.setState({ contacts: [data] });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts contacts={this.state.contacts} id={formId} />
      </>
    );
  }
}

export default App1;
