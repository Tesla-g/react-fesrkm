import React, { useState } from 'react';
import { useDataList } from './dataManager';

const Data = () => {
  const [data, setData] = useState('');
  const [cloudinaryImageId, setCloudinaryImageId] = useState('');
  const [avgRating, setAvgRating] = useState('');

  const { dataList, updateDataList } = useDataList();

  const handleSubmit = () => {
    const newData = {
      type: 'restaurant',
      data: {
        id: dataList.length + 1,
        name: data,
        cloudinaryImageId: cloudinaryImageId,
        avgRating: avgRating,
      },
      subtype: 'basic',
    };
    updateDataList(newData);
    setData('');
    setCloudinaryImageId('');
    setAvgRating('');
  };

  console.log(dataList);
  console.log(data);

  return <div>{/* Input elements and button */}</div>;
};

export default Data;
