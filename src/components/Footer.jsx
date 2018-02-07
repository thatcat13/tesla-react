import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  const footerDivStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'space-around'
  };
  const footerLinkStyles = {
    textDecoration: 'none',
    color: 'black',
    padding: 10
  };

  return (
    <div style={footerDivStyles}>
      <Link to="/" style={footerLinkStyles}>Tesla C 2018</Link>
      <Link to="/" style={footerLinkStyles}>Privacy & Legal</Link>
      <Link to="/" style={footerLinkStyles}>Contact</Link>
      <Link to="/" style={footerLinkStyles}>Careers</Link>
      <Link to="/" style={footerLinkStyles}>Forums</Link>
      <Link to="/" style={footerLinkStyles}>Locations</Link>
      <Link to="/" style={footerLinkStyles}>USA</Link>
    </div>
  );
}

export default Footer;
