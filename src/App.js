import React from "react";
import "./App.css";


import { Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import OnboardPage from "./pages/OnboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} exact element={<AuthPage />} />
        <Route path={"/auth"} exact element={<AuthPage />} />
        <Route path={"/onboard"} exact element={<OnboardPage />} />
        <Route path={"/*"} exact element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
