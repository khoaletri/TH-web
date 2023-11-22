import React from "react";
import { useParams } from "react-router-dom";

const Person = ({ people }) => {
  const { id } = useParams();
  const person = people.find((p) => p.id === id);

  return (
    <div className="Person">
      {person ? (
        <div>
          <h1>{person.name}</h1>
          <p>ID: {person.id}</p>
          <p>Address: {person.address}</p>
          <p>Department: {person.department}</p>
        </div>
      ) : (
        <div>Person not found</div>
      )}
    </div>
  );
};

export default Person;
