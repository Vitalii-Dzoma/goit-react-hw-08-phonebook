// import { useDeleteContactMutation } from 'redux/contacts';
import toast, { Toaster } from 'react-hot-toast';
import { Li, Button } from './ContactItem.styled';

const notify = () => toast('Contact has been deleted.');

export const ContactItem = ({ id, name, number, onDelete }) => {
  // const [deleteTodo, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <Li>
        {`Mr ${name} : ${number}`}
        <Button
          onClick={() => {
            onDelete(id), notify;
          }}
        >
          Delete
        </Button>
      </Li>
    </>
  );
};
