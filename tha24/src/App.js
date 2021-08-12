import "./App.css";
import { useState, useEffect, Profiler } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home'
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
const App = () => {
  const [login, setLogin] = useState("notLoggedIn");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading("Loading...");
    setTimeout(() => {
      setLogin("notLoggedIn");
      setLoading("");
    }, 1000);
  }, []);
  console.log(loading);

  return (
    <Router className="main">
      <div className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        {login === "loggedIn" ? (
          <>
            <Link className="link" to="/profile">
              Profile
            </Link>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
          </>
        ) : (
          <>
          <Link className="link" to="/">
          profile
        </Link>
        <Link className="link" to="/">
          Dashboard
        </Link>
        </>
        )}
      </div>

      <Switch>
        <Route exact path="/">
          <Home 
          setLogin={setLogin}
          login={login}
          loading={loading}
          setLoading={setLoading}
        />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>

    </Router>
  )
}
export default App;