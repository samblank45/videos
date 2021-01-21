import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onFormSubmit(this.state.searchTerm)
    //call parent prop
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.searchTerm}
              onChange={this.handleChange}
             />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar