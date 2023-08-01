// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page components
import HomePage from './pages/HomePage'; 
import BrowsePage from './pages/BrowsePage';
import ProviderProfilePage from './pages/ProviderProfilePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/providers/:id" element={<ProviderProfilePage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;