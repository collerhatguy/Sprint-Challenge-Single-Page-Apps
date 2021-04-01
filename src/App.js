import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import {BrowserRouter as Router, Route} from "react-router-dom"

export default function App() {
  
  return (
    <main data-testid='app'>
      <Header />
      <Router>
        <Route path="/characterList" component={CharacterList}/>
        <Route path="/welcome" component={WelcomePage}/>
      </Router>
    </main>
  );
}
