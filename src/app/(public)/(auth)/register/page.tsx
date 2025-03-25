import React from 'react'
import RegisterForm from './register-form'
import './style.css'

export default function page() {
  return (
    <div className='register'>
        <div className="title">Register</div>
        <RegisterForm />
    </div>
  )
}
