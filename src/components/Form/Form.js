import React from 'react';

import s from './Form.module.css';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  disabledButton = () => {
    contacts.filter(cont =>
    { this.state.name.toLowerCase() === cont.name.toLowerCase() && alert(`${cont.name} is already declared`) }
    )
  }
  

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(e.currentTarget.value);

    this.reset();
  };

  render() {
    const { contacts } = this.props;
    const contact = contacts.filter(cont => cont.name);
    return (
      <div>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              onChange={this.handleChangeName}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" >Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
