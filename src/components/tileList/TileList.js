import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  const contacsList = () => {
    contacts.map(contact => {
      return <Tile contact={contact}/>;
    })
  }

  return (
    <div>
      {contacsList}
    </div>
  );
};
