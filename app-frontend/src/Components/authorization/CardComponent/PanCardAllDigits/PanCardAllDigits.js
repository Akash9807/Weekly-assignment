import React from 'react'

const PanCardAllDigits = () => {
    return (
        <div>
            <div className="card shadow1">
                <div className='Details'>
                    <h3>PAN Card Verification</h3>
                    <label>Enter your PAN card number</label>
                    <br />
                    <input placeholder='Enter PAN'></input>
                    <br />
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default PanCardAllDigits
