import React from 'react';

// React.createContext('my state');
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
