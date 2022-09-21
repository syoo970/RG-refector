import { Routes, Route } from "react-router-dom";
import { Redirect, MainPage } from "./pages";
import NavBar from "@/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App;
