import { Routes, Route } from "react-router-dom";
import { Redirect, MainPage, Entry, RegisterPage, LoginPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Entry />}>
        <Route index element={<MainPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/redirect" element={<Redirect />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
