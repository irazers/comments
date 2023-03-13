import { Component } from 'react';
import md5 from 'md5';
import classes from './Avatar.module.scss';

export default class Avatar extends Component {

  getGravatarImage(email, radius) {
    return `https://secure.gravatar.com/avatar/${ md5(email) }.jpg?s=${ radius }&d=identicon&r=g`;
  }

  render() {
    return (
      <div className={classes.circle}>
        <img
          className={classes['image-circle']}
          src={ this.getGravatarImage(this.props.email, this.props.radius) }
          alt={ this.props.email }
        />
      </div>
    )
  }
}
