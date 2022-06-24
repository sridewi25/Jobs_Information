import React, { useEffect, useState } from 'react';
import './App.css';
import HomeAfterLogin from './pages/Home/HomeAfterLogin'
import HomeBeforeLogin from './pages/Home/HomeBeforeLogin'

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);
  return (
    <>
    
      { loginStatus ? (
        <HomeAfterLogin loginStatus={loginStatus}loginCbHandler={loginCbHandler}></HomeAfterLogin>
      ) : (
        <HomeBeforeLogin loginStatus={loginStatus} loginCbHandler={loginCbHandler}></HomeBeforeLogin>
      )}
    </>
  );
}

export default App;
