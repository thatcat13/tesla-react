import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import error from './../assets/images/error.jpg';

function Error404(props){
  const errorDivStyles = {
    textAlign: 'center'
  };

  const imgStyles = {
    objectFit: 'cover'
  };
  return (
    <div style={errorDivStyles}>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <img style={imgStyles} src={error}/>
      <h3>Would you like to return <Link to="/#/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
