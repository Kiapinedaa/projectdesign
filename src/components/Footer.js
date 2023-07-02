import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const Footer = () => {
  return <>
    <footer className='py-4 border-top'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear() }; Powered by Designers{" "}</p>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer
