import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { 
  Login,
  Dashboard
} from '../pages/index';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}
