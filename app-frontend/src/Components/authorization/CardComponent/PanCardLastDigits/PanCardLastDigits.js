import React from 'react'
import './PanCardLastDigits.css'

const PanCardLastDigits = () => {
    return (
        <div>
           <div className="card shadow1">
                <div className='Details'>
                    <h3>PAN Card Verification</h3>
                    <label>Enter only the digits of your PAN</label>
                    <br />
                    <input placeholder='Last 4 Digits of PAN Card '></input>
                    <br />
                    <div>
                    <span className='TextColor'>e.g.</span> 
                    If your PAN Card number is AZZPZ
                    <span className='TextColor'>1234</span>
                    Z, then type 
                    <b>1234</b>
                    </div>
                    <button>SUBMIT</button>
                    
                </div>
            </div> 
        </div>
    )
}

export default PanCardLastDigits
