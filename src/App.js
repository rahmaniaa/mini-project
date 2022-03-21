import { Route, Routes, Navigate } from 'react-router-dom';
import { FormLogin, FormSignup } from './components';
import { DetailArticle, EventList, Homepage, UserProfile } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='signup' element={<FormSignup />} />
        <Route path='login' element={<FormLogin />} />
        <Route path='events' element={<EventList />} />
        <Route path='user' element={<UserProfile />} />
        <Route path='user/:userId/event/:eventId' element={<DetailArticle />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
