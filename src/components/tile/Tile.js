import React from "react";

export const Tile = ({contact}) => {
  return (
    <div className="tile-container">
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
};
