import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { useStateValue } from "./states/StateProvider";
import { Home, Login, Signup, Event, Admin, CreateEvent } from "./views";
import { IconButton } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  const [{ darkMode }, dispatch] = useStateValue();

  const toggleMode = () => {
    const mode = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("color-mode", mode);
    dispatch({
      type: "SET_DARKMODE",
      dark: !darkMode,
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/event/:id">
            <Event />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <ProtectedRoute exact path="/dashboard" component={Admin} />
          <ProtectedRoute
            exact
            path="/dashboard/create"
            component={CreateEvent}
          />
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>

      <IconButton onClick={toggleMode} className="App__darkBtn">
        <WbSunnyIcon />
      </IconButton>
    </div>
  );
}

export default App;
