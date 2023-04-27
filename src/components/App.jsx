import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Tweets from './Tweets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets/*" element={<Tweets />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
}

export default App;
