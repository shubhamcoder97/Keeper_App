import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import noteList from "./components/noteList";
import createNote from "./components/createNote";
import createUser from "./components/createUser";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container p-4">
        <Route path="/" exact component={noteList} />
        <Route path="/edit/:id" component={createNote} />
        <Route path="/create" component={createNote} />
        <Route path="/user" component={createUser} />
      </div>
    </Router>
  );
}

export default App;
