import React, { useEffect } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
// import Login from "../components/Login";
// import { useStateProvider } from '../../utility/stateProvider';
// import { reducerCases } from '../../utility/constants';



function CoreLayout({ children, history }) {
  // const [{ token }, dispatch] = useStateProvider()
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const token = hash.substring(1).split("&")[0].split("=")[1]
  //     dispatch({ type: reducerCases.SET_TOKEN, token })
  //   }
  // }, [token, dispatch])
  return (
    <div className="main">
      <SideBar />

      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">
          {/* { token ? {children} : <Login />} */}
          {children}
        </div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
