import { Routes, Route } from "react-router-dom";
import LandingSite from "./component/LandingSite/Index";
import LandingPage from "./component/LandingSite/LandingPage/index";
import About from "./component/LandingSite/About/index";
import Login from "./component/LandingSite/Auth/Login";
import Register from "./component/LandingSite/Auth/Register";
import AdminSignIn from "./component/LandingSite/Auth/Admin-login";

import Dashbroad from "./component/Dashbroad/Userdash/Dashbroad";
import Home from "./component/Dashbroad/Userdash/Home";
import Books from "./component/Dashbroad/Userdash/Books";

import AdminDash from "./component/Dashbroad/Admindash/Dashbroad";
import BookSection from "./component/Dashbroad/Admindash/BookSection";
import AllStudents from "./component/Dashbroad/Admindash/AllStudents"
import Error from "./component/LandingSite/Auth/Error";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingSite />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="admin-login" element={<AdminSignIn />} />
        <Route path="*" element={<Error />} />
      </Route>

      <Route path="admin-dash" element={<AdminDash />}>
        <Route index element={<AllStudents />} />
        <Route path="book-section" element={<BookSection />} />
        <Route path="allstudents" element={<AllStudents />} />
      </Route>
      
      <Route path="dashbroad" element={<Dashbroad />}>
        <Route index element={<Home />} />
        <Route path="Avalible-books" element={<Books />} />

      </Route>
    </Routes>
  );
}

export default App;
