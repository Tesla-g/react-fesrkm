import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Content';

const Offerlist = () => {
  return <></>;
};
// const Coupen = ({ code }) => {
//   const [copentext, setcoupentext] = useState(null);
//   const [text, setText] = useState(true);
//   const handlecoupencopy = () => {
//     setcoupentext(code);
//     setText(!text);
//   };
//   return (
//     <>
//       {' '}
//       <button oncLick={handlecoupencopy}>Copy Coupon</button>
//     </>
//   );
// };
const Restramenu = () => {
  let { id } = useParams();
  const [restlist, setreslist] = useState({});

  useEffect(() => {
    getRestradata();
  }, []);
  async function getRestradata() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6558126&lng=77.2419522&restaurantId=93614'
    );
    const resdata = await data.json();
    setreslist(resdata.data?.cards);
  }
  console.log(restlist);

  const [text, setText] = useState(null);
  const [copy, setcopy] = useState(false);
  console.log(text);
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
        <img
          src={`${IMG_CDN_URL}${restlist[0]?.card?.card?.info.cloudinaryImageId}`}
          alt="restrimageid"
        />
        <h3>{restlist[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>

      {restlist[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
        (num, idx) => {
          return (
            <div key={idx}>
              <h3>{`${num?.info?.header}`}</h3>
              <h2>{console.log(num?.info?.header)}</h2>
              <h4>Coupen code :{`${num.info.couponCode}`}</h4>
              <button
                onClick={() => {
                  setText(num.info.couponCode);
                  setcopy(true);
                }}
              >
                {' '}
                Copy coupen
              </button>
              {copy ? <h3>Coupon selected succesfully</h3> : null}
            </div>
          );
        }
      )}


      
    </>
  );
};
export default Restramenu;
