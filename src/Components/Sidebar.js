// src/Components/Sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/account">
        Account
      </a>
      <a className="menu-item" href="/scripts">
        Scripts
      </a>
      <a className="menu-item" href="/support">
        Support
      </a>
    </Menu>
  );
};