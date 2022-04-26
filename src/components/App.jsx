import App1 from './App/App';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './../redux/store';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomepPage/HomePage';
import { ContactList } from './ContactlList/ContactList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Provider store={store}>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contacts" element={<ContactList />} />
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
};
