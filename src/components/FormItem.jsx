import React from 'react'

const FormItem = ({dato, type}) => {
    return (
        <div className="col-md-2">
            <label className="form-label">{dato}</label>
            <input type={type} className="form-control"required/>
        </div>
    )
}

export default FormItem


               