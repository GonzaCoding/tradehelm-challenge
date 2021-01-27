import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";

import "./styles.scss";
import Item from "../Item";
import {ItemType} from "../Item/types";
import {addItem, getItems, deleteItem} from "../../services/ItemService";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    getItems().then((localItems) => {
      setItems(localItems);
    });
  };

  const handleClickAddItem = () => {
    Swal.fire({
      title: "Add item",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: (item) => {
        if (item) {
          return addItem(item)
            .then(() => {
              fetchItems();
            })
            .catch((error) => {
              Swal.fire({
                title: error.message,
                showConfirmButton: false,
                timer: 1000,
                icon: "error",
              });
            });
        } else {
          Swal.fire({
            title: "Item can't be empty",
            showConfirmButton: false,
            timer: 1000,
            icon: "warning",
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Item added!",
          showConfirmButton: false,
          timer: 1000,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Item not added! :(",
          showConfirmButton: false,
          timer: 1000,
          icon: "warning",
        });
      }
    });
  };

  const handleDeleteItem = (index: number) => {
    Swal.fire({
      title: "Do you want to delete this item?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return deleteItem(index)
          .then(() => {
            fetchItems();
          })
          .catch((error) => {
            Swal.fire({
              title: error.message,
              showConfirmButton: false,
              timer: 1000,
              icon: "error",
            });
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          showConfirmButton: false,
          timer: 1000,
          icon: "success",
        });
      } else if (result.isDismissed) {
        Swal.fire({
          title: "Item not deleted!",
          showConfirmButton: false,
          timer: 1000,
          icon: "warning",
        });
      }
    });
  };

  return (
    <div className="item-list">
      <div className="item-list-count">
        <h2>
          {items.length > 0 ? items.length : 0} {items.length === 1 ? "item" : "items"}
        </h2>
      </div>
      <div className="item-list-items">
        {items &&
          items.map((item, index) => (
            <Item key={index} item={item} itemIndex={index} onDelete={handleDeleteItem} />
          ))}
      </div>
      <div className="item-list-actions">
        <button className="item-list-actions-button" onClick={() => handleClickAddItem()}>
          <p className="item-list-actions-button-text">Add item</p>
          <img
            className="item-list-actions-button-image"
            src="https://img.icons8.com/clouds/60/000000/reminders.png"
          />
        </button>
      </div>
    </div>
  );
};

export default ItemList;
