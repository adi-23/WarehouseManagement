
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WarehouseList from './components/WarehouseList';
import { BrowserRouter } from 'react-router-dom';
import WarehouseDetails from './components/WarehouseDetails';
import WarehouseForm from './components/WarehouseForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path= "/warehouse" element={<WarehouseDetails/>} />
          <Route path="/edit/:id" element={<WarehouseForm/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
