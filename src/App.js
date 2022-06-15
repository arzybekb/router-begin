import { Route, BrowserRouter } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { ProductDetail } from "./container/ProductDetail";
import { Products } from "./container/Products";
import { Welcome } from "./container/Welcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainHeader />
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

// http://localhost:3000/ -> home.js
// http://localhost:3000/products -> products.js
// http://localhost:3000/products/2 -> product.js
