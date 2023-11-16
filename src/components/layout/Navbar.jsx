import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) {
  return (
    <nav className='mb-12 shadow-lg navbar bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2 hover:text-secondary">
                <Link to='/' className='text-lg font-bold align-middle'>
                {title}
                </Link>
                <FaGithub className='inline pl-2 text-3xl'/>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/' className='rounded btn btn-ghost btn-sm hover:text-secondary'>Home</Link>
                    <Link to='/about' className='rounded btn btn-ghost btn-sm hover:text-secondary'>About</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
};

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar