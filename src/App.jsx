import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Edit from "./pages/Edit.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Movies from "./pages/Movies.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/movie/:id" exact component={MovieDetail} />
        <Route path="/movie/:movieId/review/:reviewId" exact component={Edit} />
        <Route path="/login" exact component={Login} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/" exact component={Landing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
