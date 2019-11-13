import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Category from "./views/Category";
import Product from "./views/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories/:slug" component={Category} />
        <Route path="/products/:slug" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
