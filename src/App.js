import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import "./App.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleLogin = () => {
    setisLoggedIn(!isLoggedIn);
    console.log("submited");
  };
  return (
    <div className="App">
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Header showNavs={isLoggedIn} handleLogout={handleLogin} />

      {!isLoggedIn && <LoginForm handleClick={handleLogin} />}
      {isLoggedIn && (
        <Routes>
          <Route
            exact
            path="/"
            element={<WelcomeMessage setProgress={setProgress} key="home" category={"general"} />}
          />
          <Route
            exact
            path="science"
            element={<WelcomeMessage setProgress={setProgress} key="science" category={"science"} />}
          />
          <Route
            exact
            path="sports"
            element={<WelcomeMessage setProgress={setProgress} key="sports" category={"sports"} />}
          />
          <Route
            exact
            path="health"
            element={<WelcomeMessage setProgress={setProgress} key="health" category={"health"} />}
          />
          <Route
            exact
            path="entertainment"
            element={
              <WelcomeMessage setProgress={setProgress} key="entertainment" category={"entertainment"} />
            }
          />
          <Route
            exact
            path="technology"
            element={
              <WelcomeMessage setProgress={setProgress} key="technology" category={"technology"} />
            }
          />
          <Route
            exact
            path="business"
            element={<WelcomeMessage setProgress={setProgress} key="business" category={"business"} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
