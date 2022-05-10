import { App1 } from './App/App';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Suspense, useState, useEffect } from 'react';
import RegisterView from './views/RedisterView';
import LoginView from './views/LoginView';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import HomeView from './HomepPage/HomePage';
import { ContactList } from './ContactlList/ContactList';
import { CreateContactPage } from './CreateContact/CreateContact';
import Filter from './Filter/Filter';
import AppBar from './AppBar/AppBar';
import { authOperations, authSelectors } from '../redux/auth';

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
      <AppBar />
      <Suspense>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PublicRoute redirectTo="/login">
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/register"
            restricted
            element={
              <PublicRoute redirectTo="/login">
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/login"
            restricted
            element={
              <PublicRoute redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <App1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts/create"
            element={
              <PrivateRoute redirectTo="/login">
                <CreateContactPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<HomeView />} />
        </Routes>
      </Suspense>
    </div>
  );
};

function PublicRoute({ children, restricted = false, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
