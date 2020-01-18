import React from 'react';
import { actors } from '../data'

class Actors extends React.Component {
  render(){
    return (
      <div>
        <h1>Actors Page</h1>
        {
          actors.map(a => <div>{a.name}
            {
              a.movies.map(m => <ul>{m}</ul>)
            }
            </div>)
        }
      </div>
    )
  }
}

export default Actors;
