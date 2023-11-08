import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
function Home() {
  return (
    <>
        <UserSearch />
        <UserResults />
    </>
  )
}

export default Home

//import.meta.env.VITE_GITHUB_TOKEN