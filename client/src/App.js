import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Welcome from './pages/welcomePage';
import Message from './pages/messagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
