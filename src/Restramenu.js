import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Restramenu = () => {
  let { id } = useParams();
  const [restlist, setreslist] = useState({});
  useEffect(() => {
    getRestradata();
  }, []);
  async function getRestradata() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6558126&lng=77.2419522&restaurantId=340434'
    );
    const resdata = await data.json();
    setreslist(resdata);
  }
  console.log(restlist);
  return (
    <>
      <h1>restrapage id is: {id}</h1>

      {

        
      }
    </>
  );
};
export default Restramenu;
