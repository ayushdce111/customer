import React from 'react'

const UserProfile = ({userData}) => {
  return (
    <>
    <h1>USER</h1>
    <hr/>
      <p>{userData.email}</p>
            <p>{userData.name}</p>
    </>
  )
}

export default UserProfile