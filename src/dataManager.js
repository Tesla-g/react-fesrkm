import { useState } from 'react';
import { restaurantList } from './Content';

let dataList = restaurantList;

export const useDataList = () => {
  const [list, setList] = useState(dataList);

  const updateDataList = (newData) => {
    dataList = [...list, newData];
    setList(dataList);
  };

  return { dataList, updateDataList };
};
