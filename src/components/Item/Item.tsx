import React from "react";

import {ItemType} from "./types";

interface Props {
  item: ItemType;
}

const Item: React.FC<Props> = ({item}) => {
  return (
    <div className="item">
      <p>{item.title}</p>
      <p>{item.id}</p>
    </div>
  );
};

export default Item;
