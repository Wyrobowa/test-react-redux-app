import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

// Styles
import { MainTitle } from './mainStyles';

const Main = ({ children }) => {
  return (
    <div>
      <MainTitle>
        <Link to="/">Reactstagram</Link>
      </MainTitle>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropType.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
