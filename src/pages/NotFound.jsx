import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className="mb-8 font-bold text 8xl">
            Oops!
          </h1>
          <p className="mb-8 text-5xl"> 404 Page - not found!</p>
          <Link to='/' className='btn btn-primary btn-lg'>
            <FaHome className='mr-2'/>
            Back to Homd
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
