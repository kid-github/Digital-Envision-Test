import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import GetPlaylist from './GetPlaylist/getPlaylist';

import featuredPlaylist from "./dummy/featured-playlist.json";
import newReleases from "./dummy/new-releases.json";
import categories from "./dummy/categories.json";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: newReleases.albums.items,
      playlists: featuredPlaylist.playlists.items,
      categories: categories.categories.items
    };

    // Using dummy from data that i get using my client ID
    // I cant finish the assignment but the code that is included in new files 
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <GetPlaylist />
        <a href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=token`}> Click to Login </a>
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
