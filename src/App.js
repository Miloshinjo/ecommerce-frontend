import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Category from "./views/Category";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:slug" component={Category} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
