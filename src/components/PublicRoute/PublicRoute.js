import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect
        ? () => navigate({ redirectTo }, { replace: true })
        : children}
    </Route>
  );
}
