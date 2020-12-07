import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import { useAuth } from '../lib/auth';
import Toast from '../components/Toast';

const LoginForm = () => {
  const auth = useAuth();

  return (
    <div>
      <Toast
        text="This route is specifically for the owner and developer of this site."
        type="warning"
      />
      <div className="flex justify-center">
        <button
          onClick={() => auth.signinWithGoogle()}
          className=" flex justify-center items-center py-2 px-4 bg-gray-200 text-gray-900 rounded w-3/5 hover:bg-gray-300"
        >
          <FcGoogle size={24} className="mr-8" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
