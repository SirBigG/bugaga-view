import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bgImg from './bg3.jpeg';
import s from './HeaderSection.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class HeaderSection extends Component {
  static propTypes = {
    backgroundImage: PropTypes.string,
  };
  static defaultProps = {
    backgroundImage: bgImg,
  };
  render() {
    const { backgroundImage } = this.props;
    return (
      <div
        className={s.header_filter}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      />
    );
  }
}

export default withStyles(s)(HeaderSection);
