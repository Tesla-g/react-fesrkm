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
    <h1 className='text-3xl underline  font-sans font-light'>dasdasd</h1>
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
