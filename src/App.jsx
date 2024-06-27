import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import MyNav from "./components/MyNavbar";
import MyFooter from "./components/MyNewFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <header className="App-header">
        <AllTheBooks />

        {/* <ButtonComponent text="Click Me!" />
        <ImageComponent src="https://via.placeholder.com/150" alt="Placeholder" /> */}
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
