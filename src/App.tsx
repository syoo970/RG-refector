import { Routes, Route } from "react-router-dom";
import { Redirect } from "./pages";
import NavBar from "@/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App;
