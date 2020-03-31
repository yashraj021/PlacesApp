import React, { useEffect, useState, Fragment } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Users = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState();

   useEffect(() => {
       const sendRequest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/user');

                const responseData = await response.json();

                if(!response.ok)
                    throw new Error(responseData.message)
                
                setLoadedUsers(responseData.users);                
            } catch (error) {
                setError(error.message)
            }
            
            setIsLoading(false);
        };

       sendRequest();
   }, [])

   const errorHandler = () => setError(null);

    return (
        <Fragment>
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && <div className="center">
                <LoadingSpinner />
            </div>}
            {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
        </Fragment>
    )
}

export default Users;