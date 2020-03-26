import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Yash',
            image: 'https://avatars2.githubusercontent.com/u/47192627?s=460&u=887f008eec63433d4904794be842ce515776bf03&v=4',
            places: 3
        },
    ]

    return <UsersList items={USERS} />
}

export default Users;