import { Navbar } from "./component/Navbar";
import { Slider } from "./component/Slider";
import { ProductsList } from "./component/ProductsList";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./component/Cart";
import { ProductDetail } from "./component/ProductDetail";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Slider /><ProductsList /></>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
