import React from  'react';
import { Link } from 'react-router-dom';
import { GoogleAuth } from '../../services/auth';

const HeaderBar = () => {
  return(
    <div className="ui secundary  pointing menu">
      <Link to="/" className="item">Stremay</Link>
      <div className="right menu">
        <Link to="/" className="item">All Streams</Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default HeaderBar;