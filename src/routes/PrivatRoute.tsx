import { Outlet, Navigate } from 'react-router';

interface isAuthProp {
  isAuth?: Boolean
}

export const PrivatRoute = ({ isAuth = true }: isAuthProp) => {

  return isAuth ? <Outlet /> : <Navigate to="/login" />
}
