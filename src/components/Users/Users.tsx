import React, {useEffect, useState} from 'react';

import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";




const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userDetails, setUserDetails] = useState<IUser>()


    const click = async (userId: number): Promise<void> => {
        const {data} = await userService.getById(userId);
        setUserDetails(data)
    }



    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);


    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            {users && users.map(obj => <User key={obj.id} user={obj} click={click}/>)}
        </div>
    );
};

export default Users;