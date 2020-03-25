import React,{Component} from 'react';
import Navbar from './Components/Layout/Navbar';
import User from'./Components/Users/User';
import Search from './Components/Users/Search';
import './App.css';
import axios from'axios';

class App extends Component{

  state={
    users:[],
    loading:false
  }


   /*async componentDidMount(){
     
     this.setState({loading:true});

    const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
      console.log(res.data);

    this.setState({users:res.data,loading:false});

    }*/

    searchUsers=async (text)=>{
      this.setState({loading:true});
      const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
      console.log(res.data);

    this.setState({users:res.data.items,loading:false});

    }
    
    clearUsers=()=>{
      this.setState({users:[],loading:false});
    }
  
  render(){
        return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <div className="container">
          <Search searchUsers={this.searchUsers} 
          clear={this.clearUsers} 
          showClear={this.state.users.length>0?true:false}/>
        <User loading={this.state.loading} users={this.state.users} />
        </div>
        
      </div>
    );
  }
 
}

export default App;
