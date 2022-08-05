/** @format */
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}  />
          <Route path="/" element={<LoginPage />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
