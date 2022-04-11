import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import "./app.css";
import {BrowserRouter ,Routes ,Route, } from 'react-router-dom'
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/newProduct' element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
