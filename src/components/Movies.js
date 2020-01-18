import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(m => <div>Title: {m.title} <br/>
            Time:{m.time}<br/>
            {m.genres.map(g => <ul>{g}</ul>)}
            </div>)
        }
    </div>
  );
};

export default Movies;
