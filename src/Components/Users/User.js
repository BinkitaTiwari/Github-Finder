import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Layout/spinner';
import PropTypes from 'prop-types';

const User=(props)=> {
    if(props.loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={styleUser}>
                {props.users.map(user=>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
        
    
        
    
}

User.propTypes={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

const styleUser={
    display:'grid',
    gridGap:'1rem',
    gridTemplateColumns:'repeat(3,1fr)'
}
export default User;