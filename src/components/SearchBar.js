import React from 'react';

class SearchBar extends React.Component{
//Intialize the state object
    state = {term: ''};

// onChange handler
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    //onSubmit handler
    onFormSubmit = (event) => {
    //Stop the page from reloading when submitting
        event.preventDefault();

        //Make sure we call callback from parent component
        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type='text' 
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;