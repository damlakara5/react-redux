import { Redirect, Route, Switch } from "react-router-dom";
import MainHedar from "./components/MainHedar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <MainHedar />
      <main>
        <Switch>
          <Route path="/" exact >
              <Redirect  to="/welcome" />  
           </Route>
          <Route  path="/welcome" >
              <Welcome />
          </Route>
          <Route path="/products" exact >
            <Products />
          </Route> 
          <Route path="/products/:productId" >
            <ProductDetail />
          </Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
