import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Adm from "./pages/adm";
import Login from "./pages/login";
import SubsPage from "./pages/subscribePage";
import TripsDisplay from "./pages/tripdisplay";
import Error from "./pages/error";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/adm">
          <Adm />
        </Route>
        <Route exact path="/login">
          {/* O que será renderizado quando a rota for "/sobre" */}
          <Login />
        </Route>
        <Route exact path="/subspage">
          {/* O que será renderizado quando a rota for "/"" */}
          <SubsPage />
        </Route>
        <Route exact path="/home">
          {/* O que será renderizado quando a rota for "/"" */}
          <TripsDisplay />
        </Route>
        <Route exact path="/">
          {/* O que será renderizado quando a rota for "/"" */}
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
