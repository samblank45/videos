import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends React.Component {
  searchTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        query: term
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.searchTermSubmit}/>
      </div>
    )
  }
}

export default App