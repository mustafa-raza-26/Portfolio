import { useEffect } from "react";
import Home from "./Home.jsx";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <Home />;
}

export default App;
