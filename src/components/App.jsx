import App1 from './App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './../redux/store';

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
        <PersistGate loading={null} persistor={persistor}>
          <App1 />
        </PersistGate>
      </Provider>
    </div>
  );
};
