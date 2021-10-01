import React from 'react'

const LoginFormItem = ({dato, type, className}) => {
    return (
        <div className={className}>
            <label className="form-label">{dato}</label>
            <input type={type} className="form-control"required/>
        </div>
    )
}

export default LoginFormItem
