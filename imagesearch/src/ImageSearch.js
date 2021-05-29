import React, { Component } from 'react';

class ImageSearch extends Component {
  render() {
    return(
        <div>
          <Header name={this.state.appName} />
          <SearchBar search={this.searchData.bind(this)} />
          {(this.state.list) ? <SearchResult data={this.state.list} /> : null  }
        </div>
      );
  }
}

export default ImageSearch;