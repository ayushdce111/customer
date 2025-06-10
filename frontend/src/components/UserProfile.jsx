import React from 'react'

const UserProfile = ({userData}) => {
  return (
    <>
    <h1>USER</h1>
      <p>{userData.email}</p>
    </>
  )
}

export default UserProfile