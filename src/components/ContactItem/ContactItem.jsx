export const ContactItem = ({ contacts, onDelete, deleting }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name} : {number}
            <button onClick={() => onDelete(id)}>
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
