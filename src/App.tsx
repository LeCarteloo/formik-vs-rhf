import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormikPage } from './features/FormikPage/FormikPage';
import { RHFPage } from './features/RHFPage/RHFPage';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/formik" element={<FormikPage />} />
          <Route path="/rhf" element={<RHFPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
