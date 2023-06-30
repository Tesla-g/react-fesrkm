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
    
      

      <ul
      className='flex  flex-row justify-center gap-10 border-red-100'
      >
        {Appheaderdata.map((num, idx) => {
          return (
            <li key={idx} className='flex items-center gap-0 border-2 bg-red-400 rounded-md  font-mono font-bold hover:bg-red-300  duration-75 px-2' >
                        <span>{num?.svg_id && <num.svg_id />}</span>
              <Link to={'/' + num.nav_name} className='decoration-none p-3 flex items-center gap-2'>
                {num?.nav_name}
       
              </Link>{' '}
            
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Appheader;
