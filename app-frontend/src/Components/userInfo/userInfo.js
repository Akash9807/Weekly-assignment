import React,  { useState } from 'react';
import "./userInfo.css";

function UserInfo() {

    const [Values, setValues] = useState({
        Amount: '',
	    MobileNumber: '',
    });

    const handleAmountChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            Amount: event.target.value,
        }));
    };

    const handleMobileNumberChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            MobileNumber: event.target.value,
        }));
    };
    

    return (
        <div className='container'>
            <table className='userInfo' >
                
                <tr>
                    <th className='Left'>Field Description</th>
                    <th className='right'>Field Name</th>
                </tr>
                <tr>
                    <td><label>Gateway*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Merchant MID*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Currency*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Amount*</label></td>
                    <td><input 
                        type="text"
                        placeholder="Amount"
                        name="Amount"
                        value={Values.Amount}
                        onChange={handleAmountChange}
                        /></td>
                </tr>
                <tr>
                    <td><label>User Lang ID*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Mobile*</label></td>
                    <td><input 
                        type="text"
                        placeholder="Enter Mobile Number"
                        name="Mobile Number"
                        value={Values.MobileNumber}
                        onChange={handleMobileNumberChange}
                        /></td>
                </tr>
                <tr>
                    <td><label>Merchant Txn ID*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Gateway Txn ID*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Lender (Bank code)*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Cart Info*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Return URL*</label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Secret Key*</label></td>
                    <td><input/></td>
                </tr>
            </table>
            <button className='continuebutton'>Continue</button>
        </div>
    );
}

export default UserInfo;
