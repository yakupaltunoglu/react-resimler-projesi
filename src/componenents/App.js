import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import './app.css'
import axios from 'axios';
import ImageList from './image/ImageList';

class App extends Component
{
  state={
    images:[]
  }
  onSearchImage =async(search) => {
    console.log('App'+ search)
    const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query:search
      },
      headers:{
        Authorization:'Client-ID LPouz1KsHJKgMc8jvuWcWdVOQ4wM5yqju3arcxmc9G4'
      }
    })
    console.log(result.data.results)
    this.setState({
      images:result.data.results
    })  
  }
  render(){
  return (
    <div className="app-container">
          <SearchBar onSearchImage={this.onSearchImage}/>
          <ImageList images={this.state.images} />
    </div>
  )
  }
};

export default App;
