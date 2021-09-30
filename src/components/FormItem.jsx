import React from 'react'

const FormItem = (dato) => {
    return (
        <div>
            <div className="input-group mr-3 mb-3 ">
                <div className="input-group-prepend rounded-left ">
                    <span className="input-group-text" id="inputGroup-sizing-default">{dato}</span>
                </div>
                <input type="text" className="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
            </div>
        </div>
    )
}

export default FormItem

