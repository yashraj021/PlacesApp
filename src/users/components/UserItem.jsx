import React from 'react';
import {Link} from 'react-router-dom';

import './UserItem.css';

import Avatar from '../../shared/components/UIElements/Avatar.jsx';
import Card from '../../shared/components/UIElements/Card.jsx'

const UserItem = props => {

    return (
        <li className="user-item">
                <Card 
                    className="user-item__content" 
                    style={{backgroundColor: '#292929', padding: 0}}
                >
                    <Link to={`/${props.id}/places`} >
                        <div className="user-item__image">
                            <Avatar image = {`http://localhost:5000/${props.image}`} alt={props.name}/>
                        </div>
                        <div className="user-item__info">
                            <h2>
                                {props.name}
                            </h2>
                            <h3>
                                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                    </Link>
                </Card>
        </li>
    )
}

export default UserItem;