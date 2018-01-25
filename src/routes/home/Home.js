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
import s from './Home.css';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import CategotySection from '../../components/Sections/CategorySection';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderSection />
        <div className={s.main}>
          <CategotySection />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
