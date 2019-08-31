import React from 'react';
import SearchBar from "./SearchBar"
import youtube from "../apis/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{
// Intialize the state
    state = { 
        videos: [],
        selectedVideo: null
     };
// When submitted run this function
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
    
    //Set the state to the videos that you get back from the API
        this.setState({videos: response.data.items})
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App