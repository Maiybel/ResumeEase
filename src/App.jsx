import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import "./tailwind.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/form" element={<ResumeBuilder />} /> */}
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
