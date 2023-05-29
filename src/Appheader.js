import React from 'react';
import { Link } from 'react-router-dom';
const Appheaderdata = [
  { nav_name: 'Home ', svg_id: '' },
  { nav_name: 'Contact ', svg_id: '' },
  { nav_name: 'About ', svg_id: '' },
  { nav_name: 'Cart ', svg_id: '' },
];
const Appheader = () => {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          textDecoration: 'none',
          listStyleType: 'none',
        }}
      >
        {Appheaderdata.map((num, idx) => {
          return (
            <li key={idx}>
              <Link to="" style={{ textDecoration: 'none' }}>
                {num.nav_name} <span>{num.svg_id} </span>{' '}
              </Link>{' '}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Appheader;
