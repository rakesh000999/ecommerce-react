import React from 'react'

const Contact = () => {
    return (
        <div className='container'>
            <div className="form-group my-3">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group my-3">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group my-3">
                <label htmlFor="">Message</label>
                <textarea name="" id="" rows={10} className='form-control'></textarea>
            </div>
            <input type="submit" className='btn btn-success' />
        </div>
    )
}

export default Contact