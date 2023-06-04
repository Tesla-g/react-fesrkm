import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {IMG_CDN_URL} from "./Content"
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
    setreslist(resdata.data?.cards);
  }
  console.log(restlist[0]?.card?.card?.info);
  const imagurl=`${ IMG_CDN_URL}`;
  return (
    <>
      <h1>restrapage id is: {id}</h1>
      <h2>{restlist[0]?.card?.card?.info?.name}</h2>
    <h3>{restlist[0]?.card?.card?.info?.city}</h3>
      <img src={} alt="restrimageid" />
      <h3></h3>
    </>
  );
};
export default Restramenu;
