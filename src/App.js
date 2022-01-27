import "./App.css";
import React, { useEffect, useState } from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { userContext } from "./Context";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllContent from "./components/AllContent";
import DetailedContent from "./components/DetailedContent";
import DetailedUsers from "./components/DetailedUsers";
import ScrollToTop from "./components/ScrollToTop.js";
import DetailedPhotos from "./components/DetailedPhotos";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <userContext.Provider value={{ users, setUsers }}>
        <ThemeProvider theme={theme}>
          <div className="page-container">
            <div className="content-wrap">
              <Navbar />
              <ScrollToTop />
              <GlobalStyles />
              <Routes>
                <Route path="/" element={<AllContent />} exact />
                <Route
                  path="/content/:id"
                  element={<DetailedContent />}
                  exact
                />
                <Route path="/users/:id" element={<DetailedUsers />} exact />
                <Route path="/photos/:id" element={<DetailedPhotos />} exact />
              </Routes>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </userContext.Provider>
    </>
  );
}

export default App;
