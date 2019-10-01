import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import AddWaifu from './components/pages/add-waifu/Adding-Waifu';
{/*import MainPage from './components/pages/main/MainPage';
import Edit from './components/pages/edit/Edit';*/}

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/*<Route path="/" exact component={MainPage} />*/}
        <Route path="/add" exact component={AddWaifu} />
        {/*<Route path="/edit/:id" component={Edit} />*/}
      </Router>
    </div>
  );
}

export default App;
