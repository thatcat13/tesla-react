import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  const footerDivStyles = {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, 0)'
  }
  const footerLinkDivStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'space-around'
  }
  const footerLinkStyles = {
    textDecoration: 'none',
    color: 'white',
    padding: 10
  }

  return (
    <div style={footerDivStyles}>
      <div style={footerLinkDivStyles}>
        <Link to="/" style={footerLinkStyles}>Tesla C 2018</Link>
        <Link to="/" style={footerLinkStyles}>Privacy & Legal</Link>
        <Link to="/" style={footerLinkStyles}>Contact</Link>
        <Link to="/" style={footerLinkStyles}>Careers</Link>
        <Link to="/" style={footerLinkStyles}>Forums</Link>
        <Link to="/" style={footerLinkStyles}>Locations</Link>
        <Link to="/" style={footerLinkStyles}>USA</Link>
      </div>
    </div>
  );
}

export default Footer;
