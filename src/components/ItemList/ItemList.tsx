import React, {useState} from "react";

import Item from "../Item";
import {ItemType} from "../Item/types";

const itemsTest: ItemType[] = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
];

const ItemList: React.FC = () => {
  const [items, setItems] = useState(itemsTest);

  return (
    <div className="item-list">
      <div className="item-list-count">
        <h2>1 item(s)</h2>
      </div>
      <div className="item-list-items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className="item-list-actions">
        <button>Add item</button>
      </div>
    </div>
  );
};

export default ItemList;
