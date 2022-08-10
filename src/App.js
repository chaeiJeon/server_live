import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Auth from "./components/KakaoAuth";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
