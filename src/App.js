import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Common
import { routes } from './common/consts';
import variables from "./common/variables";

// Components
import Grid from './components/grid/Grid';
import Item from './components/item/Item';
import Main from "./components/main/Main";

// Styles
import { GlobalStyle } from "./appStyles";

const App = () => {
  return (
    <ThemeProvider theme={variables}>
      <GlobalStyle />
      <Router>
        <Main>
          <Switch>
            <Route exact path={routes.main} component={Grid} />
            <Route path={`${routes.item}/:postId`} component={Item} />
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
