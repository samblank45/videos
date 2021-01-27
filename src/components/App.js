import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import NextPage from './NextPage'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null,
      nextPage: '',
      prevPage: '',
      searchTerm: 'dogs'
    }
  }

  componentDidMount() {
    this.searchTermSubmit('dogs')
  }

  searchTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      nextPage: response.data.nextPageToken,
      prevPage: response.data.prevPageToken,
      searchTerm: term
    })
  }
  
  onNextPage = async (term, nextPage) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        pageToken: nextPage
      }
    })
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.searchTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} 
              />
              <button onChange={this.onNextPage(this.state.searchTerm, this.state.nextPage)}>Next page</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App