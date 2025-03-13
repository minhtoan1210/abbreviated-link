'use client'
import { Input } from "antd";
import React, { useState } from "react";
import "./style.css";
import { CircleCheck } from "lucide-react";

export default function page() {
    const [isCheck, setIsCheck] = useState('classNone')
    const handleIsCheck = (value: string) => {
        setIsCheck(value)
    }

  return (
    <div className="OTP-set">
      <div className="title">Protect your account</div>
      <div className="description">
        After enabling this option - each time you log in, we will send a PIN
        code to your email address, which will be required to log in. For
        Authenticator App you will need to come back to this page to configure
        it with your device.
      </div>
      <div className="btn-otp">
        <div className={`none ${isCheck === 'classNone' && isCheck}`} onClick={() => handleIsCheck('classNone')}>
          <CircleCheck /> None
        </div>
        <div className={`e-mail ${isCheck === 'classEmail' && isCheck} `} onClick={() => handleIsCheck('classEmail')}>
          <CircleCheck /> E-mail
        </div>
        <div className={`authenticator-app ${isCheck === 'classAuthenticator-app' && isCheck}`} onClick={() => handleIsCheck('classAuthenticator-app')}>
          <CircleCheck /> Authenticator App
        </div>
      </div>
      <Input placeholder="Password" type="password" className="input-password"/>
      <div className="btn-save">Save</div>
    </div>
  );
}
