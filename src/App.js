import React from 'react';
import { dataList } from './dataManager';
import { useState, useEffect } from 'react';

import Appheader from './Appheader';

const Appnav = () => {
  return (
    <div>
      <Logo />
      <Appheader />
      <Login />
    </div>
  );
};
const logourl =
  'https://th.bing.com/th/id/OIP.ueHppfRf52CDn841Rpj8IwHaHa?pid=ImgDet&rs=1';
const Logo = () => {
  return <img src={logourl} alt="" width="80rem" />;
};
const autheticateUser = () => {
  //api call to check user authetication

  return true;
};
const Login = () => {
  const [toggle, settoggle] = useState(false);
  const handleClickk = () => {
    const apicall = autheticateUser();
    settoggle(!toggle);
  };
  return toggle === false ? (
    <button onClick={handleClickk}>Login button</button>
  ) : (
    <button onClick={handleClickk}>Logout button</button>
  );
};

//
// Use the updated `dataList` value as needed
// let lis = [];
let restaurantList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '73011',
      name: 'KFC',
      uuid: '27ff4155-fe46-418e-9862-ab98953bf953',
      city: '22',
      area: 'Anand Vihar Colony',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['American', 'Snacks', 'Biryani'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: 'kfc-chukkuwala-chukkuwala',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        'KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001',
      locality: 'Clock Tower',
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '6.1 kms',
      hasSurge: false,
      sla: {
        restaurantId: '73011',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.0',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '542132',
      name: 'Domnik Pizza',
      uuid: 'f2ee37f5-9ab0-4903-9420-6cae020b0a38',
      city: '22',
      area: 'Majra    Bansal Home',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'sboh9oor0cvp6ztsyhvj',
      cuisines: ['Pizzas', 'Italian', 'Fast Food', 'Snacks', 'Beverages'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: '33 MINS',
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: 'domnik-pizza-patel-nagar-patel-nagar-2',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        '28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand',
      locality: 'Patel Nagar',
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '542132',
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '321517',
      name: 'FOOD PLANET RESTAURANT',
      uuid: '899d5dd4-200a-48b2-a321-391bb9486ec2',
      city: '22',
      area: 'Majra',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'ykboewqeoxnne8fgrnui',
      cuisines: ['Indian', 'Chinese', 'Tandoor', 'Thalis', 'Fast Food'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: '25 MINS',
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: 'food-planet-restaurant-patel-nagar-patel-nagar',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        '157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171',
      locality: 'Patel Nagar',
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '321517',
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '2.8',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '311806',
      name: 'Burger King',
      uuid: '162a4dc4-50de-452a-82cf-751e18ac9952',
      city: '22',
      area: 'Anand Vihar Colony',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'iqh7ew5ldfgvpd5dpz60',
      cuisines: ['Burgers', 'American'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: '39 MINS',
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: 'burger-king-chakrata-road-ballupur',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        '5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND',
      locality: 'CHAKRATA ROAD',
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '6.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '311806',
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.2',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '132460',
      name: 'Annapurna Andhra Mess',
      uuid: 'c6460418-904b-4371-9e04-0ce8b1b46cae',
      city: '22',
      area: 'Dehradun',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'zw4qx2szsy9kbszk9n3d',
      cuisines: ['South Indian', 'Biryani', 'North Indian'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: '25 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: 'annapurna-andhra-mess-subhash-nagar-subhash-nagar',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        'keshav enclave sewla khurd chandrabani road behind uttranchal PG college',
      locality: 'Patel Nagar',
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '132460',
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '496677',
      name: 'Uncle Ji Restaurant',
      uuid: 'e652ab57-22c2-4226-b5ea-a5caa26ee0f8',
      city: '22',
      area: 'Patel Nagar',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'kx2ghnwagcnqjtmd5jbc',
      cuisines: ['North Indian', 'Snacks', 'Beverages'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: 'uncle-ji-restaurant-patel-nagar-patel-nagar',
        city: 'dehradun',
      },
      cityState: '22',
      address: '348 santosh tower, majra road gram majra dehradun 248001',
      locality: 'Patel Nagar',
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '496677',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
];

let data = [];

const getData = () => {
  return restaurantList;
};
const setData = (newData) => {
  restaurantList = newData;
};
console.log(getData());
const Shimmer = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: '0.5rem',
        gridGap: '1.25rem',
        width: '100%',
      }}
    >
      {Array(10)
        .fill('')
        .map((num, idx) => {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#D3d3d3',
                border: '1px solid #ddd',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                padding: '16px',
                width: '300px',
                height: '300px',
                margin: '16px',

                overflow: 'hidden',
              }}
            ></div>
          );
        })}
    </div>
  );
};
const getJsxCondinalrender = (searchtxt) => {
  // let content = searchtxt;
  // // Conditional logic
  // if (serachtxt) {
  //   content = <h1>dsadsads</h1>;
  // }
  const callback = (num) => {
    if (searchtxt === num.data.id || searchtxt === num.data.name) {
      return num;
    }
  };
  let newfiltredlist = restaurantList.filter(callback);
  // JSX code
  return <div>{newfiltredlist}</div>;
};
const App = () => {
  const [restaurantListt, setrestaurantListt] = useState([]);
  //
  useEffect(() => {
    requestData();
  }, []);
  async function requestData() {
    const res = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6558126&lng=77.2419522&page_type=DESKTOP_WEB_LISTING'
    );
    const data = await res.json();
    console.log(data.data.cards[2].data.data.cards);
    setrestaurantListt(data?.data?.cards[2]?.data?.data?.cards);
  }
  // const [data, setdata] = useState(lis);
  const [checkedvalue, setcheckedvalue] = useState('');
  // console.log(checkedvalue);

  const [checked, setchecked] = useState(false);
  // console.log(checked);

  const [value, setvalue] = useState('');
  const [cloudinaryImageId, setcloudinaryImageId] = useState('');
  const [avgRating, setAvgRating] = useState('');
  // console.log(value);
  const [searchtxt, setsearchtxt] = useState('');
  const handleClick = () => {
    const obj = {
      data: {
        id: restaurantListt.length + 1,
        name: value,
        cloudinaryImageId: cloudinaryImageId,
        avgRating: avgRating,
      },
    };
    // setdata([...data, obj]);
    // setData([...data, obj]);
    // lis.push(...data);
    // console.log('data', data);
    // console.log('lis', lis);
    // const newData = [...restaurantListt, obj];
    // setData(newData);
    setrestaurantListt([...restaurantListt, obj]);

    setvalue('');

    setcloudinaryImageId('');
    setAvgRating('');
  };
  console.log('render()');

  return (
    <div>
      <Appnav />
      {autheticateUser() === true ? (
        <div>
          <h1>login sucessfully</h1>
          <button>logout-button</button>
        </div>
      ) : (
        <button>login-button</button>
      )}

      <h3>Add data into satic json</h3>
      <input
        type="text"
        placeholder="name"
        name="serachquery"
        id="search"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="cloudinaryImageId"
        name="cloudinaryImageId"
        value={cloudinaryImageId}
        onChange={(e) => {
          setcloudinaryImageId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="avgRating"
        name="avgRating"
        value={avgRating}
        onChange={(e) => {
          setAvgRating(e.target.value);
        }}
      />
      {/* {JSON.stringify(getData())} */}
      <br />
      {value}
      <br />
      <button onClick={handleClick}>Submit</button>
      <h3>Search</h3>

      <div>
        <input
          type="text"
          placeholder="serach"
          name="serachquery"
          id="search"
          value={searchtxt}
          onChange={(e) => {
            setsearchtxt(e.target.value);
          }}
        />

        <h1> {searchtxt}</h1>
      </div>

      {/* first of all you have to make a 
      if seartxt is not empty or fouces he render as it is and if the serctxt is having data then show the filterd list that is given by another function 
      */}
      {/* { 
        restaurantList.filter((num)=>)
      } */}
      {/* {true ? <h1>dasdad </h1> : null} */}
      {/* {restaurantList.filter((num) =>
        searchtxt === num.data.id || searchtxt === num.data.name ? num : null
      )} */}

      {searchtxt === '' ? (
        restaurantListt.length === 0 ? (
          <Shimmer />
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
              gap: '0.5rem',
              gridGap: '1.25rem',
              width: '100%',
            }}
          >
            {restaurantListt.map((num, idx) => {
              return (
                <Card
                  key={num.data.id}
                  image={`${IMG_CDN_URL}${num.data.cloudinaryImageId}`}
                  restraname={num.data.name}
                  rating={num.data.avgRating}
                  isVisible={!checked || checkedvalue === num.data.avgRating}
                />
              );
            })}
          </div>
        )
      ) : (
        restaurantListt
          .filter(
            (num) =>
              searchtxt === num.data.name ||
              searchtxt === num.data.avgRating ||
              searchtxt === num.data.id ||
              num.data.name.includes(searchtxt) ||
              num.data.name.toLowerCase().includes(searchtxt)
          )
          .map((num) => {
            return (
              <div>
                <Card
                  key={num.data.id}
                  image={`${IMG_CDN_URL}${num.data.cloudinaryImageId}`}
                  restraname={num.data.name}
                  rating={num.data.avgRating}
                  isVisible={
                    (!checked && searchtxt !== '') ||
                    (checked && checkedvalue === num.data.avgRating)
                  }
                />
              </div>
            );
          })
      )}

      {searchtxt !== '' &&
      restaurantListt.filter((num) => searchtxt == num.data.name).length ===
        0 ? (
        <h1>Not Found</h1>
      ) : null}

      {/* restaurantList
        .filter((num) =>
          checked && checkedvalue === num.data.avgRating ? num : null
        )
        .map((num) => {
          return (
            <div>
              <Card
                key={num.data.id}
                image={`${IMG_CDN_URL}${num.data.cloudinaryImageId}`}
                restraname={num.data.name}
                rating={num.data.avgRating}
              />
            </div>
          );
        }) */}

      {/* {searchtxt === '' && checked == true
        ? restaurantList
            .filter((num) =>
              checked && checkedvalue === num.data.avgRating ? num : null
            )
            .map((num) => {
              return (
                <div>
                  <Card
                    key={num.data.id}
                    image={`${IMG_CDN_URL}${num.data.cloudinaryImageId}`}
                    restraname={num.data.name}
                    rating={num.data.avgRating}
                  />
                </div>
              );
            })
        : null} */}

      {checked && checkedvalue !== ''
        ? restaurantList
            .filter((num) => checkedvalue === num.data.avgRating)
            .map((num) => (
              <div key={num.data.id}>
                <Card
                  image={`${IMG_CDN_URL}${num.data.cloudinaryImageId}`}
                  restraname={num.data.name}
                  rating={num.data.avgRating}
                />
              </div>
            ))
        : null}

      <div>
        <input
          type="checkbox"
          value="4.0"
          onChange={(e) => {
            // setchecked(!checked);
            // setcheckedvalue(e.target.value);

            setchecked(e.target.checked);

            setcheckedvalue(e.target.checked ? e.target.value : '');
          }}
        />
        <label>4.0</label>
      </div>
    </div>
  );
};

const Card = ({ image, restraname, foodname, rating, isVisible }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    width: '300px',
    margin: '16px',
    display: isVisible ? 'block' : 'none',
    overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '100%', // Limit the image width to prevent overflow
    height: 'auto', // Maintain aspect ratio
  };

  return (
    // <div className="  ">
    //   <img className="w-100%" src={image} alt="food image" />
    //   <div className="flex flex-col items-start justify-center gap-2 py-1 ">
    //     <h2 className="text-xl">{restraname} </h2>
    //     <h4 className="text-sm leading-relaxed  break-words  ">{foodname}</h4>
    //     <h4>{rating}</h4>
    //   </div>
    // </div>

    <div style={cardStyle}>
      <img src={image} alt="food image" style={imageStyle} />
      <h3>{restraname}</h3>
      <p>{foodname}.</p>
      <h4>{rating}</h4>
      <button>Add to cart</button>
    </div>
  );
};
const IMG_CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export default App;
export { App };
