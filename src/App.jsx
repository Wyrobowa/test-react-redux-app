import React from 'react';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
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
          <Routes>
            <Route exact path={routes.main} element={<Grid />} />
            <Route path={`${routes.item}/:postId`} element={<Item />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
