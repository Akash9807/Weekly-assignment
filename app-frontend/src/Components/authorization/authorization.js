import React from 'react'
import './authorization.css'

function authorization() {
    return (
        <div className='Container'>
            <h2 className='Heading'>Transaction Confirmation</h2>
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
            <p className='Heading'><u>Cancel Transaction</u></p>
            <p className='Heading'>SECURE TRANSACTION</p>
            <div className='Transaction'>
                <img src="https://iccdn.in/img/logo_PCIDSS.svg" alt="PCIDSS security tag" class="securityTag__3YstB"></img>
                <img src="https://iccdn.in/img/logo_PCIDSS_Copy.svg" alt="PCIDSS security tag" class="securityTagCheck__32E2m"></img>
            </div>
        </div>
    )
}

export default authorization
