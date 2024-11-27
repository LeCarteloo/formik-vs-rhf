import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormikPage } from './features/comparison/formik-page';
import { RHFPage } from './features/comparison/rhf-page';
import Flaws from './features/context-flaws/flaws';
import { FormikArray } from './features/array/formik-array';
import { RHFArray } from './features/array/rhf-array';
import { FormikControlled } from './features/controlled/formik-controlled';
import { RHFControlled } from './features/controlled/rhf-controlled';
import Zustand from './features/zustand/zustand';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/formik" element={<FormikPage />} />
          <Route path="/rhf" element={<RHFPage />} />
          <Route path="/rhf-array" element={<RHFArray />} />
          <Route path="/formik-array" element={<FormikArray />} />
          <Route path="/formik-array" element={<FormikArray />} />
          <Route path="/formik-controlled" element={<FormikControlled />} />
          <Route path="/rhf-controlled" element={<RHFControlled />} />
          <Route path="/context-flaws" element={<Flaws />} />
          <Route path="/zustand" element={<Zustand />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
