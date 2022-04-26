import { useGetContactsQuery } from 'redux/contacts';
export const ContactList = () => {
  const { data, isFetching } = useGetContactsQuery();
  return (
    <>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <ul>
        {/* {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name} : {number}
            <button onClick={() => dispatch(remove(id))}>Delete</button>
          </li>
        ))} */}
      </ul>
    </>
  );
};
