import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/pages/Home";
import { ScrollToHash } from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToHash />   {/* 👈 This is REQUIRED */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;