import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import PeopleList from "./PeopleList";
import Person from "./Person";
import peopleData from "./peopleData.json";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SidebarLayout sidebar={<PeopleList people={peopleData} />} />
          }
        />
        <Route
          path="/people/:id"
          element={
            <SidebarLayout
              sidebar={<PeopleList people={peopleData} />}
              content={<Person people={peopleData} />}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
