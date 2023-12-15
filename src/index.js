import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout.js";
import Pic from "./components/Pic.js"

import Home from "./pages/home.js";
import Blogs from "./pages/blogs.js";
import Contact from "./pages/contact.js";
import NoPage from "./pages/NoPage";
import Aboutus from "./pages/about.js"
import LoginPage from "./components/LoginPage.js";
import RegistrationPage from "./components/RegistrationPage.js";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="about" element={<Aboutus/>} /> 
          <Route path="*" element={<NoPage />} />
          <Route path="LoginPage" element={<LoginPage/>} /> 
          <Route path="RegistrationPage" element={<RegistrationPage/>} /> 
          <Route path="Pic" element={<Pic/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



