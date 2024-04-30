import "./App.css";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Intro from "./Pages/IntroPage";
import Movies from "./Pages/Home";
import Details from "./Pages/Details";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
