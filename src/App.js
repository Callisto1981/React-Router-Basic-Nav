import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Navigation,
  MovieList,
  MovieInfo
} from "./components";

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/MovieList" component={MovieList} />
    <Route exact path="/MovieInfo" component={MovieInfo} />
  </div>
);

export default App;
