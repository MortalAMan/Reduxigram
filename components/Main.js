import React from 'react';
import { Link } from 'react-router';  

// Render Function for Main page
const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>  
      </div>
    )
  }
})

export default Main;
