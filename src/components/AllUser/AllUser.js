import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchUser from '../../store/actions/FetchUser';


const AllUser = () => {
    const { users } = useSelector(state => state.users);
    const {apiUsers} = useSelector( state => state.apiUsers);
    console.log(apiUsers);
    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch( FetchUser());
    }, [] )

    return (
        <div className="container">
            <h1 className="display-5 text-center text-success text-uppercase">All Users</h1>
            <div className="row">
                {
                    users ? users.map((user) => (
                        <div className="col-md-4" key={user.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-header">{user.name}</h2>
                                    <p className="card-text">{user.address}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-danger" onClick={()=> dispatch({type: 'DELETE_USER', id: user.id})}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )) : ''
                }
            </div>
            <h1 className="display-5 text-center text-success text-uppercase">Api Users</h1>
            <div className="row">
                {
                    apiUsers.map( (apiUser)=> (
                        <div className="col-md-4" key={apiUser.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-header">{apiUser.name}</h2>
                                    <p className="card-text">{apiUser.username}</p>
                                    <p className="card-text">{apiUser.email}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-danger" onClick={()=> dispatch({type: 'DELETE_API_USER', id: apiUser.id})} >Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default AllUser;