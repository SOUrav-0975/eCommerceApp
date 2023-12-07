import { Routes, Route } from "react-router-dom";
import Main from "./Components/Routes/Main";
import Header from "./Components/Header/Header";
import SignIn from "./Components/Routes/auth/SignIn";
import SignUp from "./Components/Routes/auth/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
