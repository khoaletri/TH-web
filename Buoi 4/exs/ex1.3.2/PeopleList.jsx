import React from "react";
import { NavLink } from "react-router-dom";
import "./PeopleList.css";

const PeopleList = ({ people }) => {
  return (
    <div className="PeopleList">
      <div className="sidebar">
        <ul>
          {people.map((person) => (
            <li key={person.id}>
              <NavLink
                activeClassName="currentPerson"
                to={`/people/${person.id}`}
              >
                {person.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {/* Content will be rendered in Person.js */}
      </div>
    </div>
  );
};

export default PeopleList;
