import {ItemType} from "../components/Item/types";

export function addItem(item: string): Promise<ItemType> {
  return new Promise<ItemType>((resolve, reject) => {
    try {
      const localItems: ItemType[] = JSON.parse(localStorage.getItem("itemList") as string) || [];

      const newItem = {
        title: item,
      };

      localItems.push(newItem);
      localStorage.setItem("itemList", JSON.stringify(localItems));

      setTimeout(() => {
        resolve({
          title: item,
        });
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}

export function getItems(): Promise<ItemType[]> {
  return new Promise<ItemType[]>((resolve, reject) => {
    try {
      const localItems: ItemType[] = JSON.parse(localStorage.getItem("itemList") as string) || [];

      resolve(localItems);
    } catch (error) {
      reject(error);
    }
  });
}

export function deleteItem(index: number): Promise<ItemType[]> {
  return new Promise<ItemType[]>((resolve, reject) => {
    try {
      const localItems: ItemType[] = JSON.parse(localStorage.getItem("itemList") as string) || [];

      const newItems = localItems.filter((_, i) => i !== index);

      localStorage.setItem("itemList", JSON.stringify(newItems));

      setTimeout(() => {
        resolve(newItems);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
