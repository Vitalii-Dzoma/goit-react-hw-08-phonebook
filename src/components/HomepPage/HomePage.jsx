// import { useGetContacts } from 'redux/contacts';
import { Link } from './HomePage.styled';
import { Ul } from './HomePage.styled';
const HomePage = () => {
  //   const dispatch = useDispatch();
  //   const { data, isFetching } = useGetContacts();

  return (
    <>
      <h2>Homepage</h2>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/contacts/create">Create contact</Link>
        </li>
      </Ul>
    </>
  );
};

export default HomePage;
