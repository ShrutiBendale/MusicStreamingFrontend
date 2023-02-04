import React from "react";

export default function Member({ member }) {
  return (
    <ul>
      {member.map((el, i) => (
        <li key={i}>{el.name}</li>
      ))}
    </ul>
  );
}