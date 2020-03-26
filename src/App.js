import React,{Component} from 'react';
import Navbar from './Components/Layout/Navbar';
import User from'./Components/Users/User';
import Search from './Components/Users/Search';
import './App.css';
import axios from'axios';
import Alert from './Components/Layout/Alert';

class App extends Component{

  state={
    users:[],
    loading:false,
    alert:null
  }

    searchUsers=async (text)=>{
      this.setState({loading:true});
      const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
      console.log(res.data);

    this.setState({users:res.data.items,loading:false});

    }
    
    clearUsers=()=>{
      this.setState({users:[],loading:false});
    }

    setAlert=(msg,type)=>{
      this.setState({alert:{msg,type}}); 
      //setTimeout(()=>this.setState({alert:null}),5000);
    }
  
  render(){
        return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <div className="container">
         <Alert alert={this.state.alert}/>
          <Search searchUsers={this.searchUsers} 
          clear={this.clearUsers} 
          showClear={this.state.users.length>0?true:false}
          setAlert={this.setAlert}
          />
        <User loading={this.state.loading} users={this.state.users} />
        </div>
        
      </div>
    );
  }
 
}

export default App;
