import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Adm from "./pages/adm";
import Home from "./pages/home";
import SubsPage from "./pages/subscribePage";
import TripsDisplay from "./pages/tripdisplay";
import Error from "./pages/error";
import Login from "./pages/login";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin">
          <Adm />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/subspage">
          <SubsPage />
        </Route>
        <Route exact path="/tripsdisplay">
          <TripsDisplay />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
