import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./components/Layout";
import Records from "./pages/Records";
import CreateRecord from "./pages/CreateRecord";
import Record from "./pages/Record";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="records">
            <Route path="view" element={<Records />} />
            <Route path=":recordId" element={<Record />} />
            <Route path="new" element={<CreateRecord />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;