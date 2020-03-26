import React,{Component} from 'react';
import PropTypes from'prop-types';

class Search extends Component{

    state={
        text:[]
    }

    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        //clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }
    onChange=(event)=>{
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit=(e)=>{
        console.log(this.state.text)
        e.preventDefault();
       
        if(this.state.text.length === 0)        {
            console.log('error');
            //alert('please enter something');
            this.props.setAlert('please enter something','light');
        }
        else{
            console.log(this.state)
            this.props.searchUsers(this.state.text);
            this.setState({text:''});
        }
        
    }


    render()
    {
            console.log(this.state)
        return(
            <div >
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" 
                    name="text" 
                    placeholder="search" 
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
               


                </form>
                {this.props.showClear&& 
                <button className="btn btn-light btn-block" onClick={this.props.clear}>Clear
                </button>}

                
            </div>

        )
    }
}

export default Search;