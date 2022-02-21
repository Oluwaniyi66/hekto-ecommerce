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
import HektoContextProvider from './screens/HektoContext';
import { CartProvider } from 'react-use-cart';
// import { ToastContainer } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <ToastContainer/>
      <CartProvider>

      <HektoContextProvider>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/grid" element={<Grid />} />
          <Route path="/list" element={<List />} />
          <Route path="/left" element={<Left />} />
          <Route path="/productdetail/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ship" element={<Shipping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ordercompleted" element={<OrderCompleted />} />
        </Routes>

      </BrowserRouter>
      </HektoContextProvider>
      </CartProvider>
      {/* </ToastContainer> */}
    </div>
  );
}

export default App;
