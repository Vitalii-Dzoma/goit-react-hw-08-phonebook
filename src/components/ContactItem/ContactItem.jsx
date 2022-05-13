// import { useDeleteContactMutation } from 'redux/contacts';
import toast, { Toaster } from 'react-hot-toast';
import { Li } from './ContactItem.styled';
import Button from '@mui/material/Button';

const notify = () => toast('Contact has been deleted.');

export const ContactItem = ({ id, name, number, onDelete }) => {
  // const [deleteTodo, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <Li>
        {`Mr ${name} : ${number}`}
        <Button
          variant="contained"
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
