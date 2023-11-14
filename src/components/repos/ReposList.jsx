import React from 'react'
import { PropTypes } from 'prop-types';
import RepoItem from './RepoItem';

function ReposList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className='my-4 text-3xl font-bold card-title'>
                Latest Respositories
            </h2>
            {repos.map((repo)=>(
                <RepoItem key={repo.id} repo={repo}/>
            ))}
        </div>
    </div>
  )
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired,
};


export default ReposList