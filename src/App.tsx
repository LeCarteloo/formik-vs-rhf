import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormikPage } from './features/formik/formik-page';
import { RHFPage } from './features/rhf/rhf-page';
import Flaws from './features/context-flaws/flaws';
import { FormikArray } from './features/ array/formik-array';
import { RHFArray } from './features/ array/rhf-array';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/formik" element={<FormikPage />} />
          <Route path="/rhf" element={<RHFPage />} />
          <Route path="/rhf-array" element={<RHFArray />} />
          <Route path="/formik-array" element={<FormikArray />} />
          <Route path="/context-flaws" element={<Flaws />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
