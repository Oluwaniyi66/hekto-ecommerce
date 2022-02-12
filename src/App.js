import logo from './logo.svg';
import './App.css';
import Grid from './screens/Grid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import List from './screens/List';
import Left from './screens/Left';
import ProductsDetails from './screens/ProductsDetails';
import Cart from './screens/Cart';
import Shipping from './screens/Shipping';
import Login from './screens/Login';
import Register from './screens/Register';
import OrderCompleted from './screens/OrderCompleted';
import Homepage from './screens/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/grid" element={<Grid />} />
          <Route path="/list" element={<List />} />
          <Route path="/left" element={<Left />} />
          <Route path="/productdetail" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ship" element={<Shipping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ordercompleted" element={<OrderCompleted />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
