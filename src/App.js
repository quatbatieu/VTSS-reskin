import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import MainLayout from "components/MainLayout";
import Home from "modules/Home/pages/Home";
import Hi from "modules/Hello/pages/Hi";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Hi />} />
      </Routes>
    </Suspense>
  );
}

export default App;
