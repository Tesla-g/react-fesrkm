import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiFillHome,
  AiFillContacts,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
const Appheaderdata = [
  { nav_name: 'Home ', svg_id: AiFillHome },
  { nav_name: 'Contact ', svg_id: AiFillContacts },
  { nav_name: 'About ', svg_id: FcAbout },
  { nav_name: 'Cart ', svg_id: AiOutlineShoppingCart },
];
const Appheader = () => {
  return (
    <nav>
      <h1 className='text '>dsadsadasd</h1>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <h1 className="text-6xlxl underline bg-green-400  font-sans font-light text-black">dasdasd</h1>
      <ul
        style={{
          display: 'flex',
          ' alignItems': 'center',
          textDecoration: 'none',
          listStyleType: 'none',
        }}
      >
        {Appheaderdata.map((num, idx) => {
          return (
            <li key={idx}>
              <Link to={'/' + num.nav_name} style={{ textDecoration: 'none' }}>
                {num.nav_name}
              </Link>{' '}
              <span>{num?.svg_id && <num.svg_id />}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Appheader;
