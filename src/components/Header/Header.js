/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

import {
  Navbar,
  NavItem,
  Nav,
  NavbarBrand,
  Collapse,
  NavLink,
} from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand>Creative Tim</NavbarBrand>
        <Collapse isOpen>
          <Nav>
            <NavItem>
              <NavLink href="/components">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Download</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(Header);
