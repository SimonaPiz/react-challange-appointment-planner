import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts.map(contact => {
        <Tile contact={contact}/>
      })}
    </div>
  );
};
