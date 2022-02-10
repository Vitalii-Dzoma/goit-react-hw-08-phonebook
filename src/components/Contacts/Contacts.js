import React from 'react';

class Contacts extends React.Component {
  render() {
    console.log(this.props.id);
    const { contacts } = this.props;
    return (
      <>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <ul>
          {contacts.map(({ name, number }) => (
            <li key={this.props.id}>
              {name} : {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Contacts;
