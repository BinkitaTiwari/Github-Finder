import React,{Component} from 'react';
import PropTypes from'prop-types';

class Search extends Component{

    state={
        text:[]
    }

    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
    }
    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
    }


    render()
    {
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