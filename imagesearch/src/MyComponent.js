import React, { Component } from 'react';
export class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  //API call to fetch images at default
    componentDidMount() {
      fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=3fbf26ac61178add989b2e7e4dfc0614&format=json&nojsoncallback=1")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.photos['photo']
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          

        return (
            //MApping of dynamic content
            <ul>
            {items.map(item => (
              <li key={item.id}>

                <img src={'https://live.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'_z.jpg'} alt={item.title}></img>
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  export default MyComponent;