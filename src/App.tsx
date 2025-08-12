import { Routes, Route } from "react-router";
import Home from "@/pages/Home.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
