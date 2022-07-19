import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Category from './components/Category/Category';
import Forms from './components/Forms/Forms';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Category />} />
          <Route path="forms" element={<Forms />} />
          <Route path='*' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
