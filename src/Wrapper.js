import React from 'react';
import Router from './Router';
import AuthProvider from './context/AuthProvider';
import FlashMessage from 'react-native-flash-message';

export default () => {
  return (
    <AuthProvider>
      <Router />
      <FlashMessage position="top" statusBarHeight={30} />
    </AuthProvider>
  );
};
