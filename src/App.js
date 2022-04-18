
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/HomePage/Header/Header';
import Login from './Pages/LoginElement/Login/Login';
import Footer from './Pages/HomePage/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound
  from './Pages/HomePage/Notfound/NotFound';
import Register from './Pages/LoginElement/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/LoginElement/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register
        ></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout
            ></Checkout>
          </RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
