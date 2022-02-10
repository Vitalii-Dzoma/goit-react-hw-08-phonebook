import React from 'react';
import s from './Form.module.css'

class Form extends React.Component {
  state = {
    contacts: [],
    name: '',
    };
    

  handleChangeName = (event) => {
    this.setState({name:event.currentTarget.value})
  }

  addContacts = () => {
    this.setState(prev =>  prev.name)
    
  }

  handleSubmit = e => {
    e.preventDefault();          
    return {
      name: this.state.name,
      id: this.props.id,
    };
  }



  render() {
   
    return (
      <div className={s.form}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.formId}>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            id={this.formId}
            onChange={this.handleChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <button type="submit">Add contact</button>
        </form>
        {}
        
      </div>
    );
    }
}

export default Form