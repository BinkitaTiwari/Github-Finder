import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import User from'./Components/Users/User';
import Use from'./Components/Users/Use';
import Search from './Components/Users/Search';
import './App.css';
import axios from'axios';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';

class App extends Component{

  state={
    users:[],
    loading:false,
    alert:null,
    user:{},
    repos:[]
  }

    searchUsers=async (text)=>{
      this.setState({loading:true});
      const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
      console.log(res.data);

    this.setState({users:res.data.items,loading:false});

    }
    
    getUser=async(username)=>{

      this.setState({loading:true});
      const res=await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
      console.log(res.data);

    this.setState({user:res.data,loading:false});
    }

    getUserRepos=async(username)=>{

      this.setState({loading:true});
      const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
      console.log(res.data);

    this.setState({repos:res.data,loading:false});
    }



    clearUsers=()=>{
      this.setState({users:[],loading:false});
    }

    setAlert=(msg,type)=>{
      this.setState({alert:{msg,type}}); 
      setTimeout(()=>this.setState({alert:null}),2000);
    }
  
  render(){
        return (
          <Router>
      <div className="App">
        <Navbar title="Github Finder"/>
        <div className="container">
         <Alert alert={this.state.alert}/>
         <Switch>
            <Route exact path="/" render={props=>(
              <Fragment>
                 <Search searchUsers={this.searchUsers} 
                 clear={this.clearUsers} 
                 showClear={this.state.users.length>0?true:false}
                 setAlert={this.setAlert}
                 />
               <User loading={this.state.loading} users={this.state.users} />
               </Fragment>
            )} />

            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" render={props=>(
                <Use {...props} 
                getUser={this.getUser} 
                getUserRepos={this.getUserRepos}
                user={this.state.user} 
                repos={this.state.repos}
                loading={this.state.loading}/>

            )}
            />

         </Switch>
         
        </div>
        
      </div>
      </Router>
    );
  }
 
}

export default App;
