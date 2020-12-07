import React from 'react';

import Shell from '../components/Shell';
import TravelForm from '../components/TravelForm';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../lib/auth';

const travel = () => {
  const auth = useAuth();

  const determineUser = () => {
    if (!auth.user || auth.user.email !== 'jspick13@gmail.com') {
      return <LoginForm />;
    } else {
      return <TravelForm />;
    }
  };
  return <Shell>{determineUser()}</Shell>;
};

export default travel;
