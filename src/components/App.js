import React from "react";
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import Sets from "./Sets";
import Test from "./Test";
import Learning from "./Learning";
import Navigation from "./Navigation";
import GenerateTest from "./GenerateTest";
import GenerateLearning from "./GenerateLearning";
import EditSet from "./EditSet";

const App = () => {
  return (
      <Container 
      className="d-flex align-items-center justify-content-center app-style"
      >
          <Router>
            <AuthProvider>
              <Navigation />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute exact path="/sets" component={Sets} />
                <PrivateRoute path="/sets/:set" component={EditSet} />
                <PrivateRoute exact path="/test" component={Test} />
                <PrivateRoute path="/test/:set" component={GenerateTest} />
                <PrivateRoute exact path="/learning" component={Learning} />
                <PrivateRoute path="/learning/:set" component={GenerateLearning} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
      </Container>
  )
}

export default App;
