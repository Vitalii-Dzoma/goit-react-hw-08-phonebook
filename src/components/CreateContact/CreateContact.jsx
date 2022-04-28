import { useCreateContactMutation } from 'redux/contacts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Form } from './CreateContact.styled';
export const CreateContactPage = () => {
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();

  const navigate = useNavigate();

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
    const name = e.currentTarget.elements.content.value;
    const phone = e.currentTarget.elements.phone.value;

    e.currentTarget.reset();
    createContact({
      name,
      phone,
    });

    navigate('/contacts', { replace: true });
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={() => toast.success('Contact has been created')}
        >
          Create Contact
        </button>
      </form>
      <button type="button" onClick={() => navigate(-1, { replace: true })}>
        Go back
      </button>
    </>
  );
};
