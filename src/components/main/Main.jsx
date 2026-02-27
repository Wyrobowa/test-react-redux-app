import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Text, Box, Button } from 'tharaday';
import { selectAuth, login, logout } from '../../features/authSlice';

const Main = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(selectAuth);

  const handleLogin = () => dispatch(login());
  const handleLogout = () => dispatch(logout());

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
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <div style={{ padding: '2rem' }}>
        {isAuthenticated ? children : (
          <Box display="flex" flexDirection="column" alignItems="center" gap={4} py={12}>
            <Text variant="h2">Welcome to Reactstagram</Text>
            <Text variant="body-lg">Please log in to see your feed and interact with posts.</Text>
            <Button size="lg" intent="info" variant="solid" onClick={handleLogin}>
              Log in to Continue
            </Button>
          </Box>
        )}
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
