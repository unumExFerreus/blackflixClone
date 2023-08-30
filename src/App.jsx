import "./App.css";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Intro from "./Pages/IntroPage";
import Movies from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
