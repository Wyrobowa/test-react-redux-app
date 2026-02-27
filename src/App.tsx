import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

// Common
import { routes } from './common/consts';

// Components
import Grid from './components/grid/Grid';
import Item from './components/item/Item';
import Main from "./components/main/Main";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Main>
        <Routes>
          <Route path={routes.main} element={<Grid />} />
          <Route path={`${routes.item}/:postId`} element={<Item />} />
        </Routes>
      </Main>
    </Router>
  );
};

export default App;
