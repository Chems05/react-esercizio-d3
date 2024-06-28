import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import MyNav from "./components/MyNavbar";
import MyFooter from "./components/MyNewFooter";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <header className="App-header">
        <SingleBook book={fantasy[3]}/>

      </header>
      <MyFooter />
    </div>
  );
}

export default App;
