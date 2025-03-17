import React from 'react'
import ProfileForm from './profile-form'
import './style.css'

export default function page() {
  return (
    <div className='profile'>
        <div className="title">Profile</div>
        <ProfileForm />
    </div>
  )
}
