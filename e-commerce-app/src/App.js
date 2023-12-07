import { Routes, Route } from "react-router-dom";
import Main from "./Components/Routes/Main";
import Header from "./Components/Header/Header";
import SignIn from "./Components/Routes/auth/SignIn";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
