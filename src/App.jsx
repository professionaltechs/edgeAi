import { BrowserRouter, Routes, Route  } from "react-router-dom";

// LAYOUT
import Layout from "./components/layout/Layout";

// PAGES
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
