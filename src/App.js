import React from "react";
import "./App.css";
import theme from "./theme";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import store from "./store";
import { Provider } from "react-redux";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
