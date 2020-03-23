import React,{Component} from 'react';
import UserItem from './UserItem';

class User extends Component{
    
    render(){
        return (
                <div style={styleUser}>
                    {this.props.users.map(user=>(
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
    
        );
    }
}
const styleUser={
    display:'grid',
    gridGap:'1rem',
    gridTemplateColumns:'repeat(3,1fr)'
}
export default User;