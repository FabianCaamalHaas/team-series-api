import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { 
  Error404,
  Login,
  Dashboard,
  TopAnimeWeek,
} from '../pages/index';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/animes' element={<TopAnimeWeek />} />

          <Route path='*' element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  )
}
