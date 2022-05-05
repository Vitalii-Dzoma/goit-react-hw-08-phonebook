import { App1 } from './App/App';
import { Provider } from 'react-redux';
import { Suspense, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './../redux/store';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomepPage/HomePage';
import { ContactList } from './ContactlList/ContactList';
import { CreateContactPage } from './CreateContact/CreateContact';
import Filter from './Filter/Filter';
import { useGetContactsQuery } from 'redux/contacts';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../components/PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Provider store={store}>
        <Suspense>
          <Routes>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <App1 />
            </PrivateRoute>
            <PrivateRoute path="/contacts/create" redirectTo="/login">
              <CreateContactPage />
            </PrivateRoute>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
};
