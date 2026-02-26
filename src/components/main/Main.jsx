import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { Header, Text } from 'tharaday';

const Main = ({ children }) => {
  return (
    <div>
      <Header
        logo={
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Text variant="h1" color="main" style={{ fontFamily: "'Grand Hotel', cursive", margin: 0 }}>
              Reactstagram
            </Text>
          </Link>
        }
      />
      <div style={{ padding: '2rem' }}>
        {children}
      </div>
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
