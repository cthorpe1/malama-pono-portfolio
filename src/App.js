import React from "react";
import { AuthProvider } from "./Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import CheckIn from "./components/CheckIn/CheckIn";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import classes from "./App.module.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className={classes.App}>
          <Navbar />
          <main className={classes.Main}>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={CheckIn}
              />
              <PrivateRoute exact path="/admin" component={AdminDashboard} />
              <Route path="/login" render={() => <Login />} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
