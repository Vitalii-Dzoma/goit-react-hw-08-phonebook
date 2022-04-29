import { useDeleteContactMutation } from 'redux/contacts';
import toast, { Toaster } from 'react-hot-toast';
import { Li, Button } from './ContactItem.styled';

const notify = () => toast('Contact has been deleted.');

export const ContactItem = ({ id, data, name, phone }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <Li>
        <p>
          {data ? `Mr ${data.name} : ${data.phone}` : `Mr ${name} : ${phone}`}
        </p>
        <Button
          onClick={() => {
            deleteTodo(id), notify;
          }}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </Li>
    </>
  );
};
