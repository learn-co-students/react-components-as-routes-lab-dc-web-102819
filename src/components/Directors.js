import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map(d => <div>{d.name}
          {d.movies.map(m => <ul>{m}</ul>)
        }</div>)
      }
    </div>
  );
}

export default Directors
