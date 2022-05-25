import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Records from "./pages/Records";
import CreateRecord from "./pages/CreateRecord";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Records />} />
          <Route path="create" element={<CreateRecord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;