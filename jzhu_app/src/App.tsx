import React from "react";

import Hello from "./components/Hello";
import { Produce, ShoppingList } from "./components/ShoppingList";
import ProjectsPage from "./projects/ProjectsPage";
import HomePage from "./home/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ProjectPage from "./projects/ProjectPage";

const data: Produce[] = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function App() {
  // return (
  //   <div className="container">
  //     <Hello name="David" enthusiasmLevel={4} />
  //     <div>
  //       <ShoppingList produce={data} />
  //     </div>
  //     <div>
  //       <ProjectPage />
  //     </div>
  //   </div>
  // );
  return (
    <Router>
      <header className="sticky">
        {/* <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" height="50" width="49" />
        </span> */}
        <NavLink to="/" className="button">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
