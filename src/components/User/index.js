import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, logOut } from '../../actions'


const User = () => {
    const currentUser = useSelector(state => state.currentUser)

    console.log(currentUser.loggedIn)

    const dispatch = useDispatch()

    // We will get this object from async call to backend
    const user = {
        name: "Seerat",
        token: 'sometoken'
    }

    // useEffect(() => {
    //     dispatch(setUser(user))
    // }, [])

    return (
        <div className="user">
            {
                currentUser.loggedIn ?
                    <>
                        <h1>Hello, {currentUser.user.name}</h1>
                        <button onClick={() => dispatch(logOut())}>Logout</button>
                    </>
                    :
                    <>
                        <h1>Login</h1>
                        <button onClick={() => dispatch(setUser(user))}>Login</button>
                    </>
            }

        </div>
    );
}

export default User;