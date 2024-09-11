import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Insert from './components/insert';
import Show from './components/show';
import Update from "./components/update"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/insert' element={<Insert />} />
          <Route path='/show' element={<Show />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
