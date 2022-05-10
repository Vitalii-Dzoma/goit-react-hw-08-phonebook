// import { useGetContacts } from 'redux/contacts';
import { Link } from '../HomepPage/HomePage.styled';
import { Ul } from '../HomepPage/HomePage.styled';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};
const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <>
        <NavLink to="/" style={styles.link} activestyle={styles.activeLink}>
          HomePage
        </NavLink>
        {isLoggedIn && (
          <Ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/contacts/create">Create contact</Link>
            </li>
          </Ul>
        )}
      </>
    </nav>
  );
};

export default Navigation;
