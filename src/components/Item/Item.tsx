import React from "react";

import "./styles.scss";

import {ItemType} from "./types";

interface Props {
  item: ItemType;
  itemIndex: number;
  onDelete: (index: number) => void;
}

const Item: React.FC<Props> = ({item, itemIndex, onDelete}) => {
  return (
    <div className="item">
      <p>{item.title}</p>
      <button className="item-delete-button" onClick={() => onDelete(itemIndex)}>
        <img
          className="item-delete-button-image"
          src="https://img.icons8.com/clouds/60/000000/delete-forever.png"
        />
      </button>
    </div>
  );
};

export default Item;
