import React from 'react'

const DebitCardLastDigits = () => {
    return (
        <div>
            <div className="card shadow1">
                <div className='Details'>
                    <h3>Verify Your Account</h3>
                    <label>Enter last 4 digits of your Debit Card</label>
                    <br />
                    <input placeholder='Enter Last 4 digits'></input>
                    <br />
                    <button>VERIFY DEBIT CARD</button>
                </div>
            </div>
        </div>
    )
}

export default DebitCardLastDigits
