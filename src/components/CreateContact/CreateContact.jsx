import { useState } from 'react';
import { useCreateContactMutation } from 'redux/contacts';

export const CreateContactPage = () => {
  const [createContact] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.phone.value);
    createContact({
      name: e.currentTarget.elements.content.value,
      phone: e.currentTarget.elements.phone.value,
    });
    e.currentTarget.reset();
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="content" onChange={handleChange} />
        <input type="number" name="phone" onChange={handleChange} />
        <button type="submit">CreateCOntact</button>
      </form>
    </>
  );
};
