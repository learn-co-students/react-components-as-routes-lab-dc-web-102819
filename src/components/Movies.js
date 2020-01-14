import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(flick => 
          <div key={flick.title}>
            <p>{flick.title}</p>
            <p>Runtime: {flick.time}</p>
            <ul>{flick.genres.map(genre => <li key={flick.title + '-' + genre}>{genre}</li>)}</ul>
          </div>)}
    </div>
  );
};

export default Movies;
