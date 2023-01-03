import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { 
  Error404,
  Login,
  TopAnimeWeek,
} from '../pages/';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<TopAnimeWeek />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  )
}
