import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default function App() {
  const [Mode, setMode] = useState('light')
  const [btnText, setbtnText] = useState('OFF')
  const [headline, setheadline] = useState('dark')

  const toggleMode = () => {
    if (Mode === "light") {
      setMode('dark');
      setbtnText('ON');
      setheadline('info');
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode('light');
      setbtnText('OFF');
      setheadline('dark');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  const apiKey = process.env.REACT_APP_NEWS_API; // put Api key here in 'string' 

    return (
      <Router>
        <Navbar
          mode={Mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                apikey={apiKey}
                category="general"
                heading="Newsify"
                mode={Mode}
                headline={headline}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                apikey={apiKey}
                category="business"
                heading="Business"
                mode={Mode}
                headline={headline}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                apikey={apiKey}
                category="entertainment"
                heading="Entertainment"
                mode={Mode}
                headline={headline}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                apikey={apiKey}
                category="health"
                heading="Health"
                mode={Mode}
                headline={headline}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                apikey={apiKey}
                category="sports"
                heading="Sports"
                mode={Mode}
                headline={headline}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                apikey={apiKey}
                category="science"
                heading="Science"
                mode={Mode}
                headline={headline}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                apikey={apiKey}
                category="technology"
                heading="Technology"
                mode={Mode}
                headline={headline}
              />
            }
          />
        </Routes>
      </Router>
    );
}
