import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Settings from './components/Settings';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Settings' element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
