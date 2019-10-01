import React from 'react';

import './Header.css';

export default function Header(props) {

  const {
    portfolio,
    linkedin,
    github
  } = props.header;

  return (
      <header>
        <ul>
          <li><a href={portfolio}>Portfolio</a></li>
          <li><a href={linkedin}>LinkedIn</a></li>
          <li><a href={github}>GitHub</a></li>
        </ul>
      </header>
  );
}