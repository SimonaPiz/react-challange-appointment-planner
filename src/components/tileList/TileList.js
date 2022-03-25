import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
      {!tiles ? <p>Loading..</p> : (
        <div>
          {tiles.map((tile, index) => (
            <Tile key={index} tile={tile}/>
          ))}   
        </div>     
      )}
    </div>
  );
};
