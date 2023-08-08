import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { MealProvider } from "./context/MealContext";
import Meal from "./pages/Meal";

function App() {
  return (
    <MealProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:idMeal" element={<Meal />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </MealProvider>
  );
}

export default App;
