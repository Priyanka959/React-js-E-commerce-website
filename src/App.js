import './App.css';
import{Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assests/men_banner.png';
import women_banner from './components/assests/women_banner.png';
import kid_banner from './components/assests/kid_banner.png';


function App() {
  return (
    <div >
      <BrowserRouter>
     
  < Navbar/>
  <Routes>
    <Route path='/'element={<Shop/>}/>
    <Route path='/Mens'element={<ShopCategory banner={men_banner} category="Mens"/>}/>

    <Route path='/Womens'element={<ShopCategory banner={women_banner}category="Womens"/>}/>

    <Route path='/Kids'element={<ShopCategory banner={kid_banner}category="Kids"/>}/>
    <Route path="/Product" element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
    </Route>
    <Route path='/Cart'element={<Cart/>}/>
    <Route path='/Login'element={<LoginSignup/>}/>


  </Routes>
  <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
