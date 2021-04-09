import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
    const storeUser = (e) =>{
        
        // console.log(name, address);
        dispatch({type: 'ADD_USER', payload: {id: uuidv4(), name, address}})
        setName('');
        setAddress('');
        e.preventDefault();
    }
    return (
        <div className="container mb-5">
            <h1 className="display-5 text-center text-success text-uppercase">Add User</h1>
            <form onSubmit={storeUser} action="" className="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} required ></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Address" value={address} onChange = {(e) => setAddress(e.target.value)} required></input>
                </div>
                <button type="submit" className="btn btn-primary btn-block text-uppercase" >Add User</button>
            </form>
        </div>
    );
};

export default Form;