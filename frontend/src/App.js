import "./App.css";
import React from "react";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AppScreen from "./screens/AppScreen";
import WebsiteScreen from "./screens/WebsiteScreen";
import WebsiteDetail from "./screens/WebsiteDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* Header */}
          <main>
            <Routes>
              <Route path="/" exact={true} element={<HomeScreen />} />
              <Route path="/app" element={<AppScreen />} />
              <Route path="/website" element={<WebsiteScreen />} />
              <Route path="/websites/:id" element={<WebsiteDetail />} />
            </Routes>
          </main>
          {/* <!-- FOOTER --> */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
