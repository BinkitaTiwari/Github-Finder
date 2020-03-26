import React,{Component, Fragment}from 'react';
import {Link} from 'react-router-dom';
import Repos from '../Repos/Repos';
import Spinner from'../Layout/spinner';
class Use extends Component{
    componentDidMount()
    {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
render(){

    const{
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company

    }=this.props.user;
    if(this.props.loading)
    {
        return <Spinner/>
    }
    return(
       <Fragment>
           <Link to="/" className="btn btn-light">
               Back to Search
           </Link>
           Hireable:{' '}
           {hireable?<i className="fas fa-check-text-success"/>:<i className="fas fa-times-circle text-danger"/>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="" className="round-img" style={{width:'150px'}}/>
                    <h1>{name}</h1>
                    <p>location:{location}</p>
                </div>
                <div>
                    {bio&&<Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                        <ul>
                            <li>
                                {login&&<Fragment>
                                    <strong>Username:</strong>{login}
                                    </Fragment>}
                            </li>
                            <li>
                                {company&&<Fragment>
                                    <strong>Company:</strong>{company}
                                    </Fragment>}
                            </li>
                            <li>
                                {blog&&<Fragment>
                                    <strong>Website:</strong>{blog}
                                    </Fragment>}
                            </li>
                        </ul>
                        </Fragment>}
                </div>

            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers:{followers}</div>
                <div className="badge badge-success">Following:{following}</div>
                <div className="badge badge-dark">Public Repos:{public_repos}</div>
                <div className="badge badge-info">Public Gists:{public_gists}</div>
                

                

            </div>

            <Repos repos={this.props.repos}/>
       </Fragment>

    )
}
 }

 export default Use;