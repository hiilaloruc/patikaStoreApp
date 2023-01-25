import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setisAuthLoading] = useState(true);

  useEffect(() => {
    //if async storage already has an user object: get and set it into User State.
    AsyncStorage.getItem('@USER').then(userSession => {
      userSession && setUser(JSON.parse(userSession));
      if (userSession) {
        console.log('@USER EXISTS.. : ', userSession);
      }
      setisAuthLoading(false);
    });
  }, []);

  const store = createStore(reducers, {user, isAuthLoading});
  return <Provider store={store}>{children}</Provider>;
};
export default AuthProvider;
