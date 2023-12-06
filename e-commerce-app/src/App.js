import { Routes, Route } from "react-router-dom";
import Main from "./Components/Routes/Main";
import Header from "./Components/Header/Header";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
