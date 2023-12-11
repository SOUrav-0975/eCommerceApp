import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Main from "./Components/Routes/Main";
import Header from "./Components/Header/Header";
import SignIn from "./Components/Routes/auth/SignIn";
import SignUp from "./Components/Routes/auth/SignUp";
import Shop from "./Components/Routes/Shop/Shop";
import CartCheckout from "./Components/Routes/CartCheckout/CartCheckout";
function App() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="cart-checkout" element={<CartCheckout />} />
      </Route>
    </Routes>
  );
}

export default App;
