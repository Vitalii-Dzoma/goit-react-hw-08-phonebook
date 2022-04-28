import App1 from './App/App';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './../redux/store';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomepPage/HomePage';
import { ContactList } from './ContactlList/ContactList';
import { CreateContactPage } from './CreateContact/CreateContact';

export const App = () => {
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
            <Route path="/" element={<HomePage />} />
            <Route path="contacts" element={<ContactList />} />
            <Route path="contacts/create" element={<CreateContactPage />} />
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
};
