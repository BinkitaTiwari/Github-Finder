import React,{Component} from 'react';
import Navbar from './Components/Layout/Navbar';
import User from'./Components/Users/User';
import './App.css';
import axios from'axios';

class App extends Component{

  state={
    users:[],
    loading:false
  }


   async componentDidMount(){
     this.setState({loading:true});

    const res=await axios.get('https://api.github.com/users')
      console.log(res.data);

    this.setState({users:res.data,loading:false});

    }
    
  
  
  render(){
        return (
      <div className="App">
        <Navbar title="Github Finder"/>
        <div className="container">
        <User loading={this.state.loading} users={this.state.users} />
        </div>
        
      </div>
    );
  }
 
}

export default App;
