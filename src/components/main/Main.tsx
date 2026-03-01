import React, { ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Text, Box, Button, Notification } from 'tharaday';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuth, login, logout } from '../../features/authSlice';

interface MainProps {
  children?: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector(selectAuth);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  const handleLogin = () => dispatch(login());
  const handleLogout = () => dispatch(logout());

  const userWithAvatar = user ? {
    ...user,
    avatar: `https://i.pravatar.cc/150?u=${user.name}`
  } : undefined;

  return (
    <div>
      <Header
        logo={
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Text variant="h1" color="main" style={{ fontFamily: "'Grand Hotel', cursive" }}>
              Reactstagram
            </Text>
          </Link>
        }
        user={userWithAvatar}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      {showNotification && (
        <Box style={{ position: 'fixed', top: '5rem', right: '1rem', zIndex: 1000 }}>
          <Notification intent="success" onClose={() => setShowNotification(false)}>
            Successfully logged in as {user?.name}!
          </Notification>
        </Box>
      )}
      <Box display="flex" padding={8} justifyContent="center">
        {isAuthenticated ? children : (
          <Box display="flex" flexDirection="column" alignItems="center" gap={4} paddingY={12}>
            <Text variant="h2">Welcome to Reactstagram</Text>
            <Text variant="body-lg">Please log in to see your feed and interact with posts.</Text>
            <Button size="lg" intent="info" variant="solid" onClick={handleLogin}>
              Log in to Continue
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Main;
