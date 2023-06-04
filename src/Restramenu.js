import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Content';

const Offerlist = () => {
  return <></>;
};
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
  console.log(restlist[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
  const imagurl = `${IMG_CDN_URL}${restlist[0]?.card?.card?.info.cloudinaryImageId}`;

  return (
    <>
      <div>
        {' '}
        <h1>restrapage id is: {id}</h1>
        <h2>{restlist[0]?.card?.card?.info?.name}</h2>
        <h3>
          {restlist[0]?.card?.card?.info?.city}{' '}
          {restlist[0]?.card?.card?.info?.areaName}
        </h3>
        <img src={imagurl} alt="restrimageid" />
        <h3>{restlist[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>

      {restlist[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
        (num, idx) => {
          return (
            <div key={idx}>
              <h3>{`${num.info.header}`}</h3>
              <h4>Coupencode :{`${num.info.couponCode}`}</h4>
            </div>
          );
        }
      )}
    </>
  );
};
export default Restramenu;
