import logo from './logo.svg';
import './App.css';
import Grid from './screens/Grid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import List from './screens/List';
import Left from './screens/Left';
import ProductsDetails from './screens/ProductsDetails';
import Cart from './screens/Cart';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
       <Routes>

         <Route path="/grid" element= {<Grid/>} />
         <Route path="/list" element={<List/>}/>
         <Route path="/left" element={<Left/>}/>
         <Route path="/productdetail" element={<ProductsDetails/>}/>
         <Route path="/cart" element={<Cart/>}/>
       </Routes>

       </BrowserRouter>
    </div>
  );
}

export default App;
